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
        icon: "img/question.png",
      },
      {
        value: "1",
        label: "Dark Mode",
        description: "Easier on the eyes",
        icon: "img/settings.png",
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
        description: "You can pin and reorder items",
        icon: "img/question.png",
      },
      {
        value: "1",
        label: "Listings Locked",
        description: "Buttons are hidden for a clean look",
        icon: "img/settings.png",
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
        icon: "img/question.png",
      },
      {
        value: "0",
        label: "Played Games Not Marked",
        description: "Don't dim games when clicked",
        icon: "img/settings.png",
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
        icon: "img/question.png",
      },
      {
        value: "1",
        label: "Unpinned Games Hidden",
        description: "Only the ones you like",
        icon: "img/settings.png",
      },
    ],
  },
];

export default settingsScreen;
