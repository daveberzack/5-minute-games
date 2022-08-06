const _padTo2Digits = function (num) {
  return num.toString().padStart(2, "0");
};

const _getTodayString = function () {
  const date = new Date();
  return [date.getFullYear(), _padTo2Digits(date.getMonth() + 1), _padTo2Digits(date.getDate())].join("");
};

const settings = {
  theme: "",
  isDark: false,
  isLocked: false,
  markPlayed: false,
  playedToday: false,
  pinnedGames: [],
  playedGames: [],
  myGames: [],

  loadSettings: function () {
    //get theme and locked
    this.theme = localStorage.getItem("theme")?.trim() || "icecream";
    this.isLocked = localStorage.getItem("isLocked")?.trim() == 1 || false;
    this.isDark = localStorage.getItem("isDark")?.trim() == 1 || false;
    this.markPlayed = localStorage.getItem("markPlayed")?.trim() == 1 || false;
    this.hideUnpinned = localStorage.getItem("hideUnpinned")?.trim() == 1 || false;
    this.myGames = JSON.parse(localStorage.getItem("myGames") || "[]");

    //has played today? if not, reset played games
    this.playedToday = false;
    const todayString = _getTodayString();
    const lastOpenedDate = localStorage.getItem("lastOpenedDate")?.trim() || "";
    if (todayString == lastOpenedDate) {
      this.playedToday = true;
    } else {
      this.playedGames = [];
      localStorage.setItem("lastOpenedDate", todayString);
      localStorage.setItem("playedGames", "");
    }

    //get played games
    this.playedGames = [];
    const playedGameString = localStorage.getItem("playedGames")?.trim();
    if (playedGameString && playedGameString != "") this.playedGames = playedGameString.split(",");

    //get pinned games
    this.pinnedGames = [];
    const pinnedGameString = localStorage.getItem("pinnedGames")?.trim();
    if (pinnedGameString && pinnedGameString != "") this.pinnedGames = pinnedGameString.split(",");
  },

  pinGame: function (id) {
    if (!this.pinnedGames.includes(id)) {
      this.pinnedGames.push(id);
      localStorage.setItem("pinnedGames", this.pinnedGames.join(","));
    }
  },

  unpinGame: function (id) {
    this.pinnedGames.forEach((g, i) => {
      if (g == id) this.pinnedGames.splice(i, 1);
    });
    this.myGames.forEach((g, i) => {
      if (g.id == id) this.myGames.splice(i, 1);
    });

    localStorage.setItem("pinnedGames", this.pinnedGames.join(","));
    localStorage.setItem("myGames", JSON.stringify(this.myGames));
  },

  movePinnedGame: function (id, change) {
    let listIndex = this.pinnedGames.indexOf(id);

    console.log("move " + id + ":" + change + "..." + listIndex);
    if (listIndex >= 0) {
      const targetGame = this.pinnedGames[listIndex];
      this.pinnedGames[listIndex] = this.pinnedGames[listIndex + change];
      this.pinnedGames[listIndex + change] = targetGame;
      localStorage.setItem("pinnedGames", this.pinnedGames.join(","));
    }
  },

  markGameAsPlayed: function (id) {
    this.playedGames.push(id + "");
    localStorage.setItem("playedGames", this.playedGames.join(","));
  },

  addGame(game) {
    let maxId = 1000;
    this.myGames.forEach((g) => {
      maxId = Math.max(g.id, maxId);
    });
    game.id = maxId + 1 + "";
    this.myGames.push(game);
    this.pinGame(game.id);
    localStorage.setItem("myGames", JSON.stringify(this.myGames));
  },

  removeGame(id) {
    this.myGames.push(game);
    localStorage.setItem("myGames", JSON.stringify(this.myGames));
  },

  toggleVar: function (name) {
    this[name] = !this[name];
    localStorage.setItem(name, this[name] ? 1 : 0);
  },

  setVar: function (name, value) {
    this[name] = value;
    localStorage.setItem(name, value);
  },
};

export default settings;
