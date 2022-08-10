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
        description: "A bright, sunny look",
        icon: "img/settings/light.png",
      },
      {
        value: "1",
        label: "Dark Mode",
        description: "Easier on the eyes",
        icon: "img/settings/dark.png",
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
        description: "Buttons are hidden for a clean look",
        icon: "img/settings/locked.png",
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
        description: "Dim games that you clicked today",
        icon: "img/settings/marked.png",
      },
      {
        value: "0",
        label: "Played Games Not Marked",
        description: "Don't dim games when clicked",
        icon: "img/settings/unmarked.png",
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
        description: "See the whole menu",
        icon: "img/settings/shown.png",
      },
      {
        value: "1",
        label: "Unpinned Games Hidden",
        description: "Only the ones you like",
        icon: "img/settings/hidden.png",
      },
    ],
  },
  {
    name: "lockoutTimer",
    type: "switch",
    labelPrefix: "",
    options: [
      {
        value: "0",
        label: "Binge Guard Off",
        description: "Page does not lock links",
        icon: "img/settings/lockout0.png",
      },
      {
        value: "15",
        label: "Binge Guard: 15m",
        description: "Lock page for 15 minutes",
        icon: "img/settings/lockout15.png",
      },
      {
        value: "30",
        label: "Binge Guard: 30m",
        description: "Lock page for 30 minutes",
        icon: "img/settings/lockout30.png",
      },
      {
        value: "60",
        label: "Binge Guard: 60m",
        description: "Lock page for 60 minutes",
        icon: "img/settings/lockout60.png",
      },
    ],
  },
];

export default settingsScreen;
