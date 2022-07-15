const games = [

/////////////// NYT Games ///////////////////////

    {
        id: 1,
        category:2,
        name: "Wordle",
        url:"https://www.nytimes.com/games/wordle/index.html",
        image:"wordle.png",
        caption: "The hit 5-letter guessing game",
        description: "DESC"
    },
    {
        id: 2,
        category:2,
        name: "The Mini",
        url:"https://www.nytimes.com/crosswords/game/mini",
        image:"mini.png",
        caption: "A quick, simple crossword",
        description: "DESC"
    },
    {
        id: 2,
        category:2,
        name: "Letter Boxed",
        url:"https://www.nytimes.com/puzzles/letter-boxed",
        image:"letterboxed.png",
        caption: "Chain words to use all the letters",
        description: "DESC"
    },
    {
        id: 2,
        category:2,
        name: "Vertex",
        url:"https://www.nytimes.com/puzzles/vertex",
        image:"vertex.png",
        caption: "Connect dots to reveal the image",
        description: "DESC"
    },
    {
        id: 2,
        category:2,
        name: "Tiles",
        url:"https://www.nytimes.com/puzzles/tiles",
        image:"tiles.png",
        caption: "Match tiles by design elements",
        description: "DESC"
    },
    {
        id: 3,
        category:2,
        name: "Sudoku: Easy",
        url:"https://www.nytimes.com/puzzles/sudoku/easy",
        image:"sudoku.png",
        caption: "Deduce the numbers in a grid",
        description: "DESC"
    },
    {
        id: 4,
        category:2,
        name: "Sudoku: Medium",
        url:"https://www.nytimes.com/puzzles/sudoku/medium",
        image:"sudoku.png",
        caption: "A challenging number grid",
        description: "DESC"
    },
    {
        id: 4,
        category:2,
        name: "Sudoku: Hard",
        url:"https://www.nytimes.com/puzzles/sudoku/hard",
        image:"sudoku.png",
        caption: "A very difficult number grid",
        description: "DESC"
    },

/////////////// Wordle Spin Offs ///////////////////////

    {
        id: 5,
        category:3,
        name: "Dordle",
        url:"https://dordle.io/",
        image:"dordle.png",
        caption: "Wordle, but with two words",
        description: "DESC"
    },
    {
        id: "6",
        category:3,
        name: "Quordle",
        url:"https://www.quordle.com/",
        image:"quordle.png",
        caption: "Wordle, but with four words",
        description: "DESC"
    },
    {
        id: "7",
        category:3,
        name: "Crosswordle",
        url:"https://crosswordle.vercel.app/",
        image:"crosswordle.png",
        caption: "Fill in the letters of a Wordle",
        description: "DESC"
    },
    {
        id: "8",
        category:3,
        name: "Absurdle",
        url:"https://qntm.org/files/absurdle/absurdle.html",
        image:"absurdle.png",
        caption: "Wordle, but it eludes you",
        description: "DESC"
    },
    {
        id: "2",
        category:3,
        name: "Squareword",
        url:"https://squareword.org/",
        image:"squareword.png",
        caption: "Guess a square of words",
        description: "DESC"
    },
    {
        id: "9",
        category:3,
        name: "Xordle",
        url:"https://xordle.xyz/",
        image:"xordle.png",
        caption: "Wordle with two words together",
        description: "DESC"
    },
    {
        id: "12",
        category:3,
        name: "IYKNK",
        url:"https://www.iykyk.com/",
        image:"iykyk.png",
        caption: "Guess the slang acronym",
        description: "DESC"
    },

    
/////////////// Other Guessing Games ///////////////////////

    {
        id: "13",
        category:4,
        name: "Heardle",
        url:"https://www.spotify.com/heardle/",
        image:"heardle.png",
        caption: "Name a tune in a few seconds",
        description: "DESC"
    },
    {
        id: "14",
        category:4,
        name: "Artle",
        url:"https://www.nga.gov/artle.html",
        image:"artle.png",
        caption: "Guess an artist by their work",
        description: "DESC"
    },
    {
        id: "15",
        category:4,
        name: "Worldle",
        url:"https://worldle.teuteuf.fr/",
        image:"",
        caption: "Guess a country by distance",
        description: "DESC"
    },
    {
        id: "16",
        category:4,
        name: "Framed",
        url:"https://framed.wtf/",
        image:"framed.png",
        caption: "Guess a movie from still shots",
        description: "DESC"
    },
    {
        id: "17",
        category:4,
        name: "Name That Ride",
        url:"https://www.namethatride.com/",
        image:"namethatride.png",
        caption: "Guess a car in a picture",
        description: "DESC"
    },


/////////////// Strategy & Puzzle Games ///////////////////////

    {
        id: "10",
        category:5,
        name: "Entanglement",
        url:"http://entanglement.gopherwoodstudios.com/en-US-index.html",
        image:"entanglement.png",
        caption: "Build a path with hex tiles",
        description: "DESC"
    },
    {
        id: "17",
        category:5,
        name: "Color Pipes",
        url:"https://www.cbc.ca/kids/games/play/color-pipes",
        image:"colorpipes.png",
        caption: "Connect without overlapping",
        description: "DESC"
    },

    
/////////////// Other Games ///////////////////////

    {
        id: "11",
        category:6,
        name: "Gridland",
        url:"http://gridland.doublespeakgames.com/",
        image:"gridland.png",
        caption: "An adventurous match-3",
        description: "DESC"
    },
    {
        id: "17",
        category:6,
        name: "The Wiki Game",
        url:"https://www.thewikigame.com/group",
        image:"wikigame.png",
        caption: "Race to a Wikipedia page",
        description: "DESC"
    },
    {
        id: "17",
        category:6,
        name: "Quick Draw",
        url:"https://quickdraw.withgoogle.com/",
        image:"quickdraw.png",
        caption: "Doodle for an A.I.",
        description: "DESC"
    },
    {
        id: "17",
        category:6,
        name: "Line Rider",
        url:"https://www.linerider.com/",
        image:"linerider.png",
        caption: "Path-drawing and physics",
        description: "DESC"
    },
    {
        id: "17",
        category:6,
        name: "Slither",
        url:"http://slither.io/",
        image:"slither.png",
        caption: "Multiplayer snake action",
        description: "DESC"
    },
];

const categories = [
    "",
    "", //Editor's Choice
    "New York Times Games",
    "Wordle Spin-Offs",
    "Other Guessing Games",
    "Strategy & Puzzle Games",
    "Other Games"
]

export {games, categories};