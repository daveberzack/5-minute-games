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
        value: "icecream",
        label: "Ice Cream",
        description: "Go ahead. Treat yourself.",
        icon: "theme/icecream/icons/favicon-32x32.png",
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
        description: "Buttons hidden for a clean look",
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
        label: "Mark Played",
        description: "Dim games that you clicked today",
        icon: "img/question.png",
      },
      {
        value: "0",
        label: "Don't Mark Played",
        description: "Don't dim listings",
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
        label: "Show Unpinned Games",
        description: "Show all items",
        icon: "img/question.png",
      },
      {
        value: "1",
        label: "Hide Unpinned",
        description: "Show only pinned items",
        icon: "img/settings.png",
      },
    ],
  },
];

export default settingsScreen;
