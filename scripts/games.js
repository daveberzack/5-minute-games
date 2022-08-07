const games = [
  /////////////// NYT Games ///////////////////////

  {
    id: "1",
    category: 1,
    name: "Wordle",
    url: "https://www.nytimes.com/games/wordle/index.html",
    image: "wordle.png",
    caption: "The hit 5-letter guessing game",
  },
  {
    id: "2",
    category: 3,
    name: "The Mini",
    url: "https://www.nytimes.com/crosswords/game/mini",
    image: "mini.png",
    caption: "A quick, simple crossword",
  },
  {
    id: "3",
    category: 3,
    name: "Letter Boxed",
    url: "https://www.nytimes.com/puzzles/letter-boxed",
    image: "letterboxed.png",
    caption: "Chain words to use all the letters",
  },
  {
    id: "4",
    category: 5,
    name: "Vertex",
    url: "https://www.nytimes.com/puzzles/vertex",
    image: "vertex.png",
    caption: "Connect dots to reveal the image",
  },
  {
    id: "5",
    category: 5,
    name: "Tiles",
    url: "https://www.nytimes.com/puzzles/tiles",
    image: "tiles.png",
    caption: "Match tiles by design elements",
  },
  {
    id: "6",
    category: 4,
    name: "Sudoku: Easy",
    url: "https://www.nytimes.com/puzzles/sudoku/easy",
    image: "sudoku.png",
    caption: "Deduce the numbers in a grid",
  },
  {
    id: "7",
    category: 4,
    name: "Sudoku: Medium",
    url: "https://www.nytimes.com/puzzles/sudoku/medium",
    image: "sudoku.png",
    caption: "A challenging number grid",
  },
  {
    id: "8",
    category: 4,
    name: "Sudoku: Hard",
    url: "https://www.nytimes.com/puzzles/sudoku/hard",
    image: "sudoku.png",
    caption: "A very difficult number grid",
  },

  /////////////// Wordle Spin Offs ///////////////////////

  {
    id: "9",
    category: 1,
    name: "Waffle",
    url: "https://wafflegame.net/",
    image: "waffle.png",
    caption: "Swap letters to form words",
  },
  {
    id: "10",
    category: 1,
    name: "Dordle",
    url: "https://dordlewordle.com/",
    image: "dordle.png",
    caption: "Wordle, but with two words",
  },
  {
    id: "11",
    category: 1,
    name: "Quordle",
    url: "https://www.quordle.com/",
    image: "quordle.png",
    caption: "Wordle, but with four words",
  },
  {
    id: "12",
    category: 3,
    name: "Crosswordle",
    url: "https://crosswordle.vercel.app/",
    image: "crosswordle.png",
    caption: "Fill in a valid Wordle game",
  },
  {
    id: "13",
    category: 1,
    name: "Absurdle",
    url: "https://qntm.org/files/absurdle/absurdle.html",
    image: "absurdle.png",
    caption: "Wordle, but it eludes you",
  },
  {
    id: "14",
    category: 1,
    name: "Squareword",
    url: "https://squareword.org/",
    image: "squareword.png",
    caption: "Guess a square of words",
  },
  {
    id: "15",
    category: 1,
    name: "Xordle",
    url: "https://xordle.xyz/",
    image: "xordle.png",
    caption: "Wordle with two words together",
  },
  {
    id: "16",
    category: 1,
    name: "IYKNK",
    url: "https://www.iykyk.com/",
    image: "iykyk.png",
    caption: "Guess the slang acronym",
  },
  {
    id: "17",
    category: 2,
    name: "Squirdle",
    url: "https://squirdle.fireblend.com/",
    image: "squirdle.png",
    caption: "Guess a pokemon by its traits",
  },
  {
    id: "18",
    category: 3,
    name: "Adverswordle",
    url: "https://adverswordle.doteye.online/",
    image: "adverswordle.png",
    caption: "Wordle in reverse",
  },
  {
    id: "19",
    category: 1,
    name: "Hurdle",
    url: "https://playhurdle.vercel.app/",
    image: "hurdle.png",
    caption: "Wordle, with vague clues",
  },
  {
    id: "20",
    category: 2,
    name: "Dugleon",
    url: "https://www.dungleon.com/",
    image: "dungleon.png",
    caption: "An RPG-themed Wordle game",
  },

  /////////////// Other Guessing Games ///////////////////////

  {
    id: "21",
    category: 2,
    name: "Redactle",
    url: "https://www.redactle.com/",
    image: "redactle.png",
    caption: "Guess words in a wiki article",
  },

  {
    id: "22",
    category: 2,
    name: "Heardle",
    url: "https://www.spotify.com/heardle/",
    image: "heardle.png",
    caption: "Name a tune in a few seconds",
  },
  {
    id: "23",
    category: 2,
    name: "Emovie",
    url: "https://emovi.teuteuf.fr/",
    image: "emovi.png",
    caption: "Guess a movie from an emoji clue",
  },
  {
    id: "24",
    category: 4,
    name: "Numberle",
    url: "https://numberle.org/",
    image: "numberle.png",
    caption: "Guess a math equation",
  },
  {
    id: "25",
    category: 2,
    name: "Artle",
    url: "https://www.nga.gov/artle.html",
    image: "artle.png",
    caption: "Guess an artist by their work",
  },
  {
    id: "26",
    category: 2,
    name: "Worldle",
    url: "https://worldle.teuteuf.fr/",
    image: "worldle.png",
    caption: "Guess a country by distance",
  },
  {
    id: "27",
    category: 2,
    name: "Framed",
    url: "https://framed.wtf/",
    image: "framed.png",
    caption: "Guess a movie from still shots",
  },

  {
    id: "28",
    category: 2,
    name: "Box Office Game",
    url: "https://boxofficega.me/",
    image: "boxoffice.png",
    caption: "Guess top movies with clues",
  },

  // {
  //   id: "29",
  //   category: 2,
  //   name: "Name That Ride",
  //   url: "https://www.namethatride.com/",
  //   image: "namethatride.png",
  //   caption: "Guess a car in a picture",
  // },

  /////////////// Strategy & Puzzle Games ///////////////////////

  {
    id: "30",
    category: 5,
    name: "Entanglement",
    url: "http://entanglement.gopherwoodstudios.com/en-US-index.html",
    image: "entanglement.png",
    caption: "Build a path with hex tiles",
  },
  {
    id: "31",
    category: 5,
    name: "Color Pipes",
    url: "https://www.cbc.ca/kids/games/play/color-pipes",
    image: "colorpipes.png",
    caption: "Connect without overlapping",
  },
  {
    id: "32",
    category: 4,
    name: "Nonograms",
    url: "https://www.puzzle-nonograms.com/",
    image: "nonograms.png",
    caption: "Color the pixels by number",
  },

  /////////////// Other Games ///////////////////////

  {
    id: "33",
    category: 3,
    name: "Scrabble",
    url: "https://playscrabble.com/",
    image: "scrabble.png",
    caption: "The classic crossword game",
  },
  {
    id: "34",
    category: 6,
    name: "Gridland",
    url: "http://gridland.doublespeakgames.com/",
    image: "gridland.png",
    caption: "An adventurous match-3",
  },
  {
    id: "35",
    category: 6,
    name: "Quick Draw",
    url: "https://quickdraw.withgoogle.com/",
    image: "quickdraw.png",
    caption: "Doodle for an A.I.",
  },
  {
    id: "36",
    category: 6,
    name: "The Wiki Game",
    url: "https://www.thewikigame.com/group",
    image: "wikigame.png",
    caption: "Race to a Wikipedia page",
  },
  {
    id: "37",
    category: 6,
    name: "Line Rider",
    url: "https://www.linerider.com/",
    image: "linerider.png",
    caption: "Path-drawing and physics",
  },
  {
    id: "38",
    category: 6,
    name: "Slither",
    url: "http://slither.io/",
    image: "slither.png",
    caption: "Multiplayer snake action",
  },

  {
    id: "39",
    category: 6,
    name: "Snake",
    url: "https://solitaired.com/snake",
    image: "snake.png",
    caption: "Move, eat and grow longer",
  },

  {
    id: "40",
    category: 1,
    name: "Phrazle",
    url: "https://solitaired.com/phrazle",
    image: "phrazle.png",
    caption: "Guess letters in a phrase",
  },

  {
    id: "41",
    category: 3,
    name: "Spelling Bee",
    url: "https://spelling-bee.io/",
    image: "spellingbee.png",
    caption: "Make words with letters given",
  },

  {
    id: "42",
    category: 3,
    name: "Weaver",
    url: "https://weavergame.org/",
    image: "weaver.png",
    caption: "Connect one word to another",
  },

  {
    id: "43",
    category: 6,
    name: "Solitaire",
    url: "https://solitaire.online/",
    image: "solitaire.png",
    caption: "Play Klondike or Spider",
  },
  {
    id: "44",
    category: 1,
    name: "Cowordle",
    url: "https://cowordle.org/",
    image: "cowordle.png",
    caption: "Competitive Wordle",
  },
];

const categories = [
  {
    id: "1",
    name: "Word Guessing games",
    games: [],
  },
  {
    id: "2",
    name: "Other Guessing Games",
    games: [],
  },
  {
    id: "3",
    name: "Other Word Games",
    games: [],
  },
  {
    id: "4",
    name: "Number Puzzles",
    games: [],
  },
  {
    id: "5",
    name: "Graphic Puzzles",
    games: [],
  },
  {
    id: "6",
    name: "Other Games",
    games: [],
  },
];

categories.forEach((c) => {
  c.games = games.filter((g) => g.category == c.id);
});

export { games, categories };
