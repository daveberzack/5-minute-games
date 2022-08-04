const games = [
  /////////////// NYT Games ///////////////////////

  {
    category: 2,
    name: "Wordle",
    url: "https://www.nytimes.com/games/wordle/index.html",
    image: "wordle.png",
    caption: "The hit 5-letter guessing game",
  },
  {
    category: 2,
    name: "The Mini",
    url: "https://www.nytimes.com/crosswords/game/mini",
    image: "mini.png",
    caption: "A quick, simple crossword",
  },
  {
    category: 2,
    name: "Letter Boxed",
    url: "https://www.nytimes.com/puzzles/letter-boxed",
    image: "letterboxed.png",
    caption: "Chain words to use all the letters",
  },
  {
    category: 2,
    name: "Vertex",
    url: "https://www.nytimes.com/puzzles/vertex",
    image: "vertex.png",
    caption: "Connect dots to reveal the image",
  },
  {
    category: 2,
    name: "Tiles",
    url: "https://www.nytimes.com/puzzles/tiles",
    image: "tiles.png",
    caption: "Match tiles by design elements",
  },
  {
    category: 2,
    name: "Sudoku: Easy",
    url: "https://www.nytimes.com/puzzles/sudoku/easy",
    image: "sudoku.png",
    caption: "Deduce the numbers in a grid",
  },
  {
    category: 2,
    name: "Sudoku: Medium",
    url: "https://www.nytimes.com/puzzles/sudoku/medium",
    image: "sudoku.png",
    caption: "A challenging number grid",
  },
  {
    category: 2,
    name: "Sudoku: Hard",
    url: "https://www.nytimes.com/puzzles/sudoku/hard",
    image: "sudoku.png",
    caption: "A very difficult number grid",
  },

  /////////////// Wordle Spin Offs ///////////////////////

  {
    category: 3,
    name: "Waffle",
    url: "https://wafflegame.net/",
    image: "waffle.png",
    caption: "Swap letters to form words",
  },
  {
    category: 3,
    name: "Dordle",
    url: "https://dordlewordle.com/",
    image: "dordle.png",
    caption: "Wordle, but with two words",
  },
  {
    category: 3,
    name: "Quordle",
    url: "https://www.quordle.com/",
    image: "quordle.png",
    caption: "Wordle, but with four words",
  },
  {
    category: 3,
    name: "Crosswordle",
    url: "https://crosswordle.vercel.app/",
    image: "crosswordle.png",
    caption: "Fill in the letters of a Wordle",
  },
  {
    category: 3,
    name: "Absurdle",
    url: "https://qntm.org/files/absurdle/absurdle.html",
    image: "absurdle.png",
    caption: "Wordle, but it eludes you",
  },
  {
    category: 3,
    name: "Squareword",
    url: "https://squareword.org/",
    image: "squareword.png",
    caption: "Guess a square of words",
  },
  {
    category: 3,
    name: "Xordle",
    url: "https://xordle.xyz/",
    image: "xordle.png",
    caption: "Wordle with two words together",
  },
  {
    category: 3,
    name: "IYKNK",
    url: "https://www.iykyk.com/",
    image: "iykyk.png",
    caption: "Guess the slang acronym",
  },
  {
    category: 3,
    name: "Squirdle",
    url: "https://squirdle.fireblend.com/",
    image: "squirdle.png",
    caption: "Guess a pokemon by its traits",
  },
  {
    category: 3,
    name: "Adverswordle",
    url: "https://adverswordle.doteye.online/",
    image: "adverswordle.png",
    caption: "Wordle in reverse",
  },
  {
    category: 3,
    name: "Hurdle",
    url: "https://playhurdle.vercel.app/",
    image: "hurdle.png",
    caption: "Wordle, with vague clues",
  },
  {
    category: 3,
    name: "Dugleon",
    url: "https://www.dungleon.com/",
    image: "dungleon.png",
    caption: "An RPG-themed Wordle game",
  },

  /////////////// Other Guessing Games ///////////////////////

  {
    category: 4,
    name: "Redactle",
    url: "https://www.redactle.com/",
    image: "redactle.png",
    caption: "Guess words in a wiki article",
  },

  {
    category: 4,
    name: "Heardle",
    url: "https://www.spotify.com/heardle/",
    image: "heardle.png",
    caption: "Name a tune in a few seconds",
  },
  {
    category: 4,
    name: "Emovie",
    url: "https://emovi.teuteuf.fr/",
    image: "emovi.png",
    caption: "Guess a movie from an emoji clue",
  },
  {
    category: 4,
    name: "Numberle",
    url: "https://numberle.org/",
    image: "numberle.png",
    caption: "Guess a math equation",
  },
  {
    category: 4,
    name: "Artle",
    url: "https://www.nga.gov/artle.html",
    image: "artle.png",
    caption: "Guess an artist by their work",
  },
  {
    category: 4,
    name: "Worldle",
    url: "https://worldle.teuteuf.fr/",
    image: "worldle.png",
    caption: "Guess a country by distance",
  },
  {
    category: 4,
    name: "Framed",
    url: "https://framed.wtf/",
    image: "framed.png",
    caption: "Guess a movie from still shots",
  },

  {
    category: 4,
    name: "Box Office Game",
    url: "https://boxofficega.me/",
    image: "boxoffice.png",
    caption: "Guess top movies with clues",
  },

  {
    category: 4,
    name: "Name That Ride",
    url: "https://www.namethatride.com/",
    image: "namethatride.png",
    caption: "Guess a car in a picture",
  },

  /////////////// Strategy & Puzzle Games ///////////////////////

  {
    category: 5,
    name: "Entanglement",
    url: "http://entanglement.gopherwoodstudios.com/en-US-index.html",
    image: "entanglement.png",
    caption: "Build a path with hex tiles",
  },
  {
    category: 5,
    name: "Color Pipes",
    url: "https://www.cbc.ca/kids/games/play/color-pipes",
    image: "colorpipes.png",
    caption: "Connect without overlapping",
  },
  {
    category: 5,
    name: "Nonograms",
    url: "https://www.puzzle-nonograms.com/",
    image: "nonograms.png",
    caption: "Color the pixels by number",
  },

  /////////////// Other Games ///////////////////////

  {
    category: 6,
    name: "Scrabble",
    url: "https://playscrabble.com/",
    image: "scrabble.png",
    caption: "The classic crossword game",
  },
  {
    category: 6,
    name: "Gridland",
    url: "http://gridland.doublespeakgames.com/",
    image: "gridland.png",
    caption: "An adventurous match-3",
  },
  {
    category: 6,
    name: "Quick Draw",
    url: "https://quickdraw.withgoogle.com/",
    image: "quickdraw.png",
    caption: "Doodle for an A.I.",
  },
  {
    category: 6,
    name: "The Wiki Game",
    url: "https://www.thewikigame.com/group",
    image: "wikigame.png",
    caption: "Race to a Wikipedia page",
  },
  {
    category: 6,
    name: "Line Rider",
    url: "https://www.linerider.com/",
    image: "linerider.png",
    caption: "Path-drawing and physics",
  },
  {
    category: 6,
    name: "Slither",
    url: "http://slither.io/",
    image: "slither.png",
    caption: "Multiplayer snake action",
  },

  {
    category: 6,
    name: "Snake",
    url: "https://solitaired.com/snake",
    image: "snake.png",
    caption: "Move, eat and grow longer",
  },

  {
    category: 6,
    name: "Phrazle",
    url: "https://solitaired.com/phrazle",
    image: "phrazle.png",
    caption: "Guess letters in a phrase",
  },

  {
    category: 6,
    name: "Spelling Bee",
    url: "https://spelling-bee.io/",
    image: "spellingbee.png",
    caption: "Make words with letters given",
  },

  {
    category: 6,
    name: "Weaver",
    url: "https://weavergame.org/",
    image: "weaver.png",
    caption: "Connect one word to another",
  },

  {
    category: 6,
    name: "Solitaire",
    url: "https://solitaire.online/",
    image: "solitaire.png",
    caption: "Play Klondike or Spider",
  },

  {
    category: 6,
    name: "Cowordle",
    url: "https://cowordle.org/",
    image: "cowordle.png",
    caption: "Competitive Wordle",
  },
];

const categories = [
  "",
  "", //Editor's Choice
  "New York Times Games",
  "Wordle Spin-Offs",
  "Other Guessing Games",
  "Strategy & Puzzle Games",
  "Other Games",
];

export { games, categories };
