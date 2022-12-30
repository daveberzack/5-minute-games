const settingsScreen = [
  {
    name: "theme",
    type: "select",
    labelPrefix: "Theme: ",
    options: [
      {
        value: "ducky",
        label: "Ducky",
        description: "Making bathtime lots of fun",
        icon: "theme/ducky/icons/favicon-32x32.png",
      },
      {
        value: "poop",
        label: "Theme #2",
        description: "Thanks for dropping in.",
        icon: "theme/poop/icons/favicon-32x32.png",
      },
      {
        value: "icecream",
        label: "Ice Cream",
        description: "Go ahead. Treat yourself.",
        icon: "theme/icecream/icons/favicon-32x32.png",
      },
      {
        value: "grey",
        label: "Shades of Grey",
        description: "It's less exciting than it sounds.",
        icon: "theme/grey/icons/favicon-32x32.png",
      },
      {
        value: "memphis",
        label: "Memphis",
        description: "Like, totally rad.",
        icon: "theme/memphis/icons/favicon-32x32.png",
      },
      {
        value: "ghost",
        label: "Ghostly",
        description: "Extra dark or whispy white",
        icon: "theme/ghost/icons/favicon-32x32.png",
      },
    ],
  },

  {
    name: "isDark",
    type: "toggle",
    labelPrefix: "",
    options: [
      {
        value: "0",
        label: "Light Mode",
        description: "For a bright, sunny look",
        icon: "img/settings/light.png",
      },
      {
        value: "1",
        label: "Dark Mode",
        description: "It's easier on the eyes",
        icon: "img/settings/dark.png",
      },
    ],
  },

  {
    name: "openLinkInNewTab",
    type: "toggle",
    labelPrefix: "",
    options: [
      {
        value: "0",
        label: "Single Tab",
        description: "Links will open in this tab",
        icon: "img/settings/singletab.png",
      },
      {
        value: "1",
        label: "Multiple Tabs",
        description: "Each link will open in a new tab",
        icon: "img/settings/multitab.png",
      },
    ],
  },

  {
    name: "isLocked",
    type: "toggle",
    labelPrefix: "",
    options: [
      {
        value: "0",
        label: "Listings Editable",
        description: "You can pin, reorder and add items",
        icon: "img/settings/unlocked.png",
      },
      {
        value: "1",
        label: "Listings Locked",
        description: "Buttons are hidden, for a clean look",
        icon: "img/settings/locked.png",
      },
    ],
  },

  {
    name: "hideUnpinned",
    type: "toggle",
    labelPrefix: "",
    options: [
      {
        value: "0",
        label: "Unpinned Games Shown",
        description: "See the entire list of games",
        icon: "img/settings/shown.png",
      },
      {
        value: "1",
        label: "Unpinned Games Hidden",
        description: "Only pinned and new games are shown",
        icon: "img/settings/hidden.png",
      },
    ],
  },
  
  {
    name: "markPlayed",
    type: "toggle",
    labelPrefix: "",
    options: [
      {
        value: "1",
        label: "Played Games Marked",
        description: "Games you've clicked today are dimmed",
        icon: "img/settings/marked.png",
      },
      {
        value: "0",
        label: "Played Games Not Marked",
        description: "Games not dimmed after you click them",
        icon: "img/settings/unmarked.png",
      },
    ],
  },
  
  {
    name: "lockoutTimer",
    type: "switch",
    labelPrefix: "Binge Guard: ",
    options: [
      {
        value: "0",
        label: "Off",
        description: "Page does not limit game linking",
        icon: "img/settings/lockout0.png",
      },
      {
        value: "900",
        label: "15 Minutes",
        description: "Page is disabled after clicking a link",
        icon: "img/settings/lockout15.png",
      },
      {
        value: "1800",
        label: "30 Minutes",
        description: "Page is disabled after clicking a link",
        icon: "img/settings/lockout30.png",
      },
      {
        value: "3600",
        label: "60 Minutes",
        description: "Page is disabled after clicking a link",
        icon: "img/settings/lockout60.png",
      },
    ],
  },
];

export default settingsScreen;
