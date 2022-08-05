import { games, categories } from "./games.js";
import settings from "./settings.js";
import settingsScreen from "./settingsScreen.js";
import { pinIcon, upIcon, downIcon, unpinIcon, helpIcon, settingsIcon, closeIcon } from "./icons.js";

const init = () => {
  settings.loadSettings();

  document.getElementById("help-button").addEventListener("click", function () {
    showPage("help");
  });
  document.getElementById("help-button").innerHTML = helpIcon;

  document.getElementById("settings-button").addEventListener("click", function () {
    showPage("settings");
  });
  document.getElementById("settings-button").innerHTML = settingsIcon;

  document.querySelectorAll(".main-button")?.forEach((e) => {
    e.addEventListener("click", function () {
      showPage("main");
    });
  });

  [...document.querySelectorAll(".close-button")].forEach((item) => (item.innerHTML = closeIcon));

  document.getElementById("modal-wrapper").addEventListener("click", function (e) {
    hideModal();
  });
  document.getElementById("modal-block").addEventListener("click", function (e) {
    e.stopPropagation();
  });
};

const applyTheme = () => {
  const cssFilename = settings.isDark ? "dark" : "light";
  document.getElementById("theme-icon").href = "./theme/" + settings.theme + "/icons/favicon.ico";
  document.getElementById("logo").src = "./theme/" + settings.theme + "/icons/android-chrome-192x192.png";
  document.getElementById("theme-style").href = "./theme/" + settings.theme + "/" + cssFilename + ".css";
};

const showSettings = () => {
  let html = "";
  settingsScreen.forEach((s, i) => {
    let chosen = s.options[0];
    s.options.forEach((o) => {
      if (o.value == settings[s.name]) chosen = o;
    });
    html += `
      <li id="${s.name}-setting">
          <a class="setting" data-setting-index="${i}">
              <img src="${chosen.icon}" class="icon" />
              <h3>${s.labelPrefix}${chosen.label}</h3>
              <p>${chosen.description}</p>
          </a>
      </li>
    `;
  });

  document.getElementById("settings-list").innerHTML = html;

  [...document.querySelectorAll(".setting")].forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const setting = settingsScreen[item.getAttribute("data-setting-index")];

      if (setting.type === "toggle") {
        settings.toggleVar(setting.name);
        showSettings();
        applyTheme();
        updateLists();
      } else if (setting.type === "select") {
        showSelectModal(setting);
      }
    });
  });
};

const showSelectModal = (setting) => {
  let html = "<h2>Select a Theme:</h2><ul>";
  setting.options.forEach((s) => {
    html += `<li data-value="${s.value}"><img src="${s.icon}"/>${s.label}</li>`;
  });
  html += "</ul>";
  showModal(html);

  [...document.querySelectorAll("#modal-block li")].forEach(function (item) {
    item.addEventListener("click", function () {
      settings.setVar("theme", item.getAttribute("data-value"));
      applyTheme();
      hideModal();
      showSettings();
    });
  });
};

const showModal = (content) => {
  document.getElementById("modal-wrapper").classList.add("modal-shown");
  document.getElementById("modal-block").innerHTML = content;
};

const hideModal = () => {
  console.log("hide");
  document.getElementById("modal-wrapper").classList.remove("modal-shown");
};

const showPage = (id) => {
  if (id == "settings") showSettings();

  document.querySelectorAll(".page").forEach((e) => {
    e.classList.remove("shown");
  });
  document.getElementById(id).classList.add("shown");
};

const linkToGame = (id, url) => {
  settings.markGameAsPlayed(id);
  window.location.href = url;
};

const formatListing = (game, isPinned, isPlayed, listIndex) => {
  let buttonsHtml = "";
  if (!settings.isLocked) {
    if (isPinned) {
      if (listIndex > 0) {
        buttonsHtml += `<div class="button up-button small-button" data-id="${game.id}">${upIcon}</div>`;
      }

      if (listIndex < settings.pinnedGames.length - 1) {
        buttonsHtml += `<div class="button down-button small-button" data-id="${game.id}">${downIcon}</div>`;
      } else {
        buttonsHtml += `<div class="button unpin-button small-button" data-id="${game.id}">${unpinIcon}</div>`;
      }
    } else {
      buttonsHtml = `<div class="button pin-button" data-id="${game.id}">${pinIcon}</div>`;
    }
  }

  return `
        <li class="${settings.markPlayed && isPlayed ? "played" : ""}">
            <a class="link" href="${game.url}" data-id="${game.id}">
                <img class="icon" src="./img/games/${game.image}"/>
                <h3>${game.name} ${listIndex}</h3>
                <p>${game.caption}</p>
            </a>
            ${buttonsHtml}
        </li>
    `;
};

const updateLists = () => {
  let html = "";

  //add all pinned games
  html += '<ul class="item-list">';
  settings.pinnedGames.forEach((p, i) => {
    const game = games.find((g) => g.id == p);
    const isPlayed = settings.playedGames.includes(game?.id);
    html += formatListing(game, true, isPlayed, i);
  });
  html += "</ul>";

  //add other games by category
  if (!settings.hideUnpinned) {
    categories.forEach((c) => {
      html += "<h2>" + c.name + '</h2><ul class="item-list">';
      c.games
        .filter((g) => !settings.pinnedGames.includes(g?.id)) //exclude pinned games
        .forEach((g, i) => {
          const isPlayed = settings.playedGames.includes(g?.id);
          html += formatListing(g, false, isPlayed, i);
        });
      html += "</ul>";
    });
  }

  document.getElementById("games").innerHTML = html;

  addItemListeners();
};

function addItemListeners() {
  [...document.querySelectorAll(".link")].forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      linkToGame(item.getAttribute("data-id"), item.getAttribute("href"));
    });
  });

  [...document.querySelectorAll(".pin-button")].forEach(function (item) {
    item.addEventListener("click", function () {
      settings.pinGame(item.getAttribute("data-id"));
      updateLists();
    });
  });

  [...document.querySelectorAll(".up-button")].forEach(function (item) {
    item.addEventListener("click", function () {
      settings.movePinnedGame(item.getAttribute("data-id"), -1);
      updateLists();
    });
  });

  [...document.querySelectorAll(".down-button")].forEach(function (item) {
    item.addEventListener("click", function () {
      settings.movePinnedGame(item.getAttribute("data-id"), 1);
      updateLists();
    });
  });

  [...document.querySelectorAll(".unpin-button")].forEach(function (item) {
    item.addEventListener("click", function () {
      settings.unpinGame(item.getAttribute("data-id"), 1);
      updateLists();
    });
  });
}

init();
applyTheme();
updateLists();
