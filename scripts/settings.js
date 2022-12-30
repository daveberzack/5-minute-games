import { getTodayString, getTimeString } from "./utils.js";
import { games } from "./games.js";

const settings = {
  userId: null,
  theme: "",
  isDark: false,
  isLocked: false,
  openLinkInNewTab:false,
  markPlayed: false,
  playedToday: false,
  pinnedGames: [],
  gamesPlayedToday: [],
  gamesPlayedEver: [],
  myGames: [],
  lockoutTimer: 0,
  lockedOutUntil: 0,
  isLockedOut: false,

  loadSettings: function () {
    //get version of last time played, and remember current version
    this.versionLastTimePlayed = localStorage.getItem("version");
    localStorage.setItem("version","1");

    this.userId = localStorage.getItem("userId") || null;
    if (!this.userId){
      this.userId = Math.random().toString(36).substr(2, 16);
      localStorage.setItem("userId",this.userId);
    }
    

    //get theme and locked
    this.theme = localStorage.getItem("theme")?.trim() || "ducky";
    this.isLocked = localStorage.getItem("isLocked")?.trim() == 1 || false;
    this.openLinkInNewTab = localStorage.getItem("openLinkInNewTab")?.trim() == 1 || false;
    this.isDark = localStorage.getItem("isDark")?.trim() == 1 || false;
    this.markPlayed = localStorage.getItem("markPlayed")?.trim() == 1 || false;
    this.hideUnpinned = localStorage.getItem("hideUnpinned")?.trim() == 1 || false;
    this.myGames = JSON.parse(localStorage.getItem("myGames") || "[]");
    this.lockoutTimer = localStorage.getItem("lockoutTimer") || 0;
    this.lockedOutUntil = localStorage.getItem("lockedOutUntil") || 0;
    this.lockedOutStarting = localStorage.getItem("lockedOutStarting") || 0;
    this.isLockedOut = getTimeString() < this.lockedOutUntil && getTimeString() > this.lockedOutStarting;

    //has played today? if not, reset played games
    this.playedToday = false;
    const todayString = getTodayString();
    const lastOpenedDate = localStorage.getItem("lastOpenedDate")?.trim() || "";
    if (todayString == lastOpenedDate) {
      this.playedToday = true;
    } else {
      this.gamesPlayedToday = [];
      localStorage.setItem("lastOpenedDate", todayString);
      localStorage.setItem("gamesPlayedToday", "");
    }

    //get played games (today and all time)
    this.gamesPlayedToday = [];
    const gamesPlayedTodayString = localStorage.getItem("gamesPlayedToday")?.trim();
    if (gamesPlayedTodayString && gamesPlayedTodayString != "") this.gamesPlayedToday = gamesPlayedTodayString.split(",");
    this.gamesPlayedEver = [];
    const gamesPlayedEverString = localStorage.getItem("gamesPlayedEver")?.trim();
    if (gamesPlayedEverString && gamesPlayedEverString != "") this.gamesPlayedEver = gamesPlayedEverString.split(",");
    console.log(this.gamesPlayedEver);

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

    if (listIndex >= 0) {
      const targetGame = this.pinnedGames[listIndex];
      this.pinnedGames[listIndex] = this.pinnedGames[listIndex + change];
      this.pinnedGames[listIndex + change] = targetGame;
      localStorage.setItem("pinnedGames", this.pinnedGames.join(","));
    }
  },

  markGameAsPlayed: function (id) {
    if (!this.gamesPlayedToday.includes(id) ){
      this.gamesPlayedToday.push(id + "");
    }
    localStorage.setItem("gamesPlayedToday", this.gamesPlayedToday.join(","));
    
    this.markGameAsNotNew(id);
  },

  markAllGamesAsNotNew: function () {
    games.forEach( g => this.markGameAsNotNew(g.id) );
  },
  
  markGameAsNotNew: function (id) {
    if (!this.gamesPlayedEver.includes(id) ){
      this.gamesPlayedEver.push(id + "");
    }
    localStorage.setItem("gamesPlayedEver", this.gamesPlayedEver.join(","));
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

  setLockedOutUntil: function () {
    if (this.lockoutTimer > 0) {
      const newLockedOutUntil = Math.max(this.lockedOutUntil, getTimeString(this.lockoutTimer));

      const d = new Date();
      let secondsGracePeriod = 10;
      const newLockedOutStarting = getTimeString(secondsGracePeriod);
      localStorage.setItem("lockedOutUntil", newLockedOutUntil);
      localStorage.setItem("lockedOutStarting", newLockedOutStarting);
    }
  },

  switchVar: function (setting) {
    const currentValue = this[setting.name];
    const currentIndex = setting.options.map((o) => o.value).indexOf(currentValue);
    const newIndex = (currentIndex + 1) % setting.options.length;
    const newValue = setting.options[newIndex].value;
    this[setting.name] = newValue;
    localStorage.setItem(setting.name, newValue);
  },

  setVar: function (name, value) {
    this[name] = value;
    localStorage.setItem(name, value);
  },
};

export default settings;
