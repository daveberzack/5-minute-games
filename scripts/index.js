import { games, categories } from "./games.js";
import { getFormattedTimeFromString } from "./utils.js";
import settings from "./settings.js";
import settingsScreen from "./settingsScreen.js";
import { pinIcon, upIcon, downIcon, unpinIcon, helpIcon, settingsIcon, closeIcon } from "./icons.js";

const init = async () => {
  if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register("../sw.js");
  }

  await settings.loadSettings();

  document.getElementById("new-emoji").addEventListener("focus", function (e) {
    e.target.value = "";
  });

  document.getElementById("change-color").addEventListener("click", function (e) {
    showColorModal();
  });

  document.getElementById("add-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameEl = document.getElementById("new-name");
    const urlEl = document.getElementById("new-url");
    const emojiEl = document.getElementById("new-emoji");
    const captionEl = document.getElementById("new-caption");

    const error = validateNewItem();
    if (error) {
      showModal(`<p class="modal-message">${error}</p>`);
    } else {
      //add new game
      const newGame = {
        name: nameEl.value,
        url: urlEl.value,
        emoji: emojiEl.value,
        caption: captionEl.value,
        emojiBackground: emojiEl.getAttribute("data-bg"),
      };
      settings.addGame(newGame);

      gtag("event", "addGame", { url: urlEl.value, name: nameEl.value });

      updateLists();

      //clear form
      nameEl.value = "";
      urlEl.value = "";
      emojiEl.value = "";
      captionEl.value = "";
      emojiEl.setAttribute("data-bg", "#999999");
      emojiEl.style.backgroundColor = "#999999";

      showModal(`<p class="modal-message">Item Added</p>`);
      setTimeout(hideModal, 2000);
    }
  });

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

const validateNewItem = () => {
  const name = document.getElementById("new-name").value;
  const url = document.getElementById("new-url").value;

  if (name == "" || !name) return "Please enter a name for this item";
  else if (url == "" || !url) return "Please enter a URL for this item";
  else if (url.substring(0, 7) != "http://" && url.substring(0, 8) != "https://") return "Please enter the full URL, starting with http:// or https://";
  else return null;
};
const applyTheme = () => {
  const cssFilename = settings.isDark ? "dark" : "light";
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
      } else if (setting.type === "switch") {
        settings.switchVar(setting);
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
  let html = '<div id="theme-select"><h2>Select a Theme:</h2><ul>';
  setting.options.forEach((s) => {
    html += `<li data-value="${s.value}"><img src="${s.icon}"/>${s.label}</li>`;
  });
  html += "</ul></div>";
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

const showColorModal = () => {
  const colorValues = ["00", "66", "AA", "FF"];
  let colorPickerHtml = '<div id="color-picker"><h2>Select Icon Background</h2>';
  colorValues.forEach((r) => {
    colorValues.forEach((g) => {
      colorValues.forEach((b) => {
        const color = "#" + r + g + b;
        colorPickerHtml += `<div style="background-color:${color};" data-color="${color}"></div>`;
      });
    });
  });
  colorPickerHtml += "</div>";
  showModal(colorPickerHtml);

  document.getElementById("color-picker").addEventListener("click", function (e) {
    const color = e.target.getAttribute("data-color");
    if (color) {
      const emojiEl = document.getElementById("new-emoji");
      emojiEl.setAttribute("data-bg", color);
      emojiEl.style.backgroundColor = color;
      hideModal();
    }
  });
};

const showModal = (content) => {
  document.getElementById("modal-wrapper").classList.add("modal-shown");
  document.getElementById("modal-block").innerHTML = content;
};

const hideModal = () => {
  document.getElementById("modal-wrapper").classList.remove("modal-shown");
};

const showPage = (id) => {
  document.querySelectorAll(".page").forEach((e) => {
    e.classList.remove("shown");
  });

  if (id == "main" && settings.isLockedOut) {
    showPage("locked");
    document.getElementById("lockout-ends").innerHTML = getFormattedTimeFromString(settings.lockedOutUntil);
  } else {
    document.getElementById(id).classList.add("shown");
  }

  if (id == "settings") showSettings();
};

const linkToGame = (id, url, name) => {
  gtag("event", "linkToGame", { id, url, name });

  settings.markGameAsPlayed(id);
  updateLists();
  settings.setLockedOutUntil();
  window.location.href = url;
};

const formatListing = (game, isPinned, isPlayed, listIndex) => {
  //console.log({ game, isPinned, isPlayed, listIndex });
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

  let gameIconEl = `<div class="emoji-icon" style="background-color:${game.emojiBackground}">${game.emoji}</div>`;
  if (game.image) {
    gameIconEl = `<img class="icon" src="./img/games/${game.image}"/>`;
  }

  return `
        <li class="${settings.markPlayed && isPlayed ? "played" : ""}">
            <a class="link" href="${game.url}" data-id="${game.id}" data-name="${game.name}">
                ${gameIconEl}
                <h3>${game.name}</h3>
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
    let game = games.concat(settings.myGames).find((g) => g.id == p);
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

  if (settings.isLocked) {
    document.getElementById("add-form").classList.add("hidden");
  } else {
    document.getElementById("add-form").classList.remove("hidden");
  }

  addItemListeners();
};

function addItemListeners() {
  [...document.querySelectorAll(".link")].forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      linkToGame(item.getAttribute("data-id"), item.getAttribute("href"), item.getAttribute("data-name"));
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
showPage("main");
