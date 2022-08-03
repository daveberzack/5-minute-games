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

  loadSettings: function () {
    //get theme and locked
    this.theme = localStorage.getItem("theme")?.trim() || "icecream";
    this.isLocked = localStorage.getItem("isLocked")?.trim() == 1 || false;
    this.isDark = localStorage.getItem("isDark")?.trim() == 1 || false;
    this.markPlayed = localStorage.getItem("markPlayed")?.trim() == 1 || false;
    this.hideUnpinned = localStorage.getItem("hideUnpinned")?.trim() == 1 || false;

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

  pinGame: function (index) {
    console.log("pin", index);
    const indexString = index + "";
    if (!this.pinnedGames.includes(indexString)) {
      this.pinnedGames.push(indexString);
      localStorage.setItem("pinnedGames", this.pinnedGames.join(","));
    }
  },

  unpinGame: function (index) {
    const indexString = index + "";
    for (let i = 0; i < this.pinnedGames.length; i++) {
      if (this.pinnedGames[i] == indexString) {
        this.pinnedGames.splice(i, 1);
      }
    }
    localStorage.setItem("pinnedGames", this.pinnedGames.join(","));
  },

  movePinnedGame: function (gameIndex, change) {
    const gameIndexString = gameIndex + "";
    let listIndex = -1;
    for (let i = 0; i < this.pinnedGames.length; i++) {
      if (this.pinnedGames[i] == gameIndexString) {
        listIndex = i;
      }
    }
    if (listIndex >= 0) {
      const targetGame = this.pinnedGames[listIndex];
      this.pinnedGames[listIndex] = this.pinnedGames[listIndex + change];
      this.pinnedGames[listIndex + change] = targetGame;
      localStorage.setItem("pinnedGames", this.pinnedGames.join(","));
    }
  },

  markGameAsPlayed: function (indexString) {
    this.playedGames.push(indexString);
    localStorage.setItem("playedGames", this.playedGames.join(","));
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
