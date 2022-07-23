import {games, categories} from "./games.js";
games.forEach( (g,i) => g.index = i);


function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('');
}

let isLocked = localStorage.getItem('isLocked')?.trim() || false;

let pinnedGames = [];
const pinnedGameString = localStorage.getItem('pinnedGames')?.trim();
if (pinnedGameString && pinnedGameString!="") pinnedGames = pinnedGameString.split(",");

let playedToday = false;
const todayString = formatDate(new Date());
const lastOpenedDate = localStorage.getItem('lastOpenedDate')?.trim() || "";
if (todayString==lastOpenedDate){
    playedToday = true;
}
else {
    localStorage.setItem("lastOpenedDate", todayString);
    localStorage.setItem("playedGames", "");
}

let playedGames = [];
const playedGameString = localStorage.getItem('playedGames')?.trim();
if (playedGameString && playedGameString!="") playedGames = playedGameString.split(",");

let theme = localStorage.getItem('theme')?.trim() || "icecream";

const otherGamesElement = document.getElementById("other-games");


const setTheme = () => {

    var icon = document.getElementById("theme-icon");
    icon.href = './theme/'+theme+'/icons/favicon.ico';

    var logo = document.getElementById("logo");
    logo.src = './theme/'+theme+'/logo.png';

    var styles = document.getElementById("theme-style");
    styles.href = './theme/'+theme+'/style.css';

}

const formatListing = (game, isPinned, isPlayed, listIndex) => {
    console.log(isPlayed, game.index);
    const index = game.index;
    let buttonsHtml = "";
    if (!isLocked){
        if (isPinned) {
            if (listIndex>0){
                buttonsHtml += `<div class="button up-button" data-index="${index}"><img src="./img/up.png"></div>`;
            }
            
            if (listIndex<pinnedGames.length-1){
                buttonsHtml += `<div class="button down-button" data-index="${index}"><img src="./img/down.png"></div>`;
            }
            else {
                buttonsHtml += `<div class="button unpin-button" data-index="${index}"><img src="./img/unpin.png"></div>`;
            }
        }
        else {
            buttonsHtml = `<div class="button pin-button" data-index="${index}"><img src="./img/pin.png"></div>`;
        } 
    }
    

    return `
        <li class="${ isPlayed ? "played":"" }">
            <a class="link" href="${game.url}" data-index="${index}">
                <img src="./img/icons/${game.image}"/>
                <h3>${game.name}</h3>
                <p>${game.caption}</p>
            </a>
            ${buttonsHtml}
        </li>
    `; 
}

const storePinnedGames = ()=>{
    localStorage.setItem('pinnedGames', pinnedGames.join(','));
    localStorage.setItem('playedGames', playedGames.join(','));
}

const linkToGame = (index, url) =>{
    console.log("play "+index);
    const indexString = index+"";
    if (!playedGames.includes(indexString)){
        playedGames.push(indexString);
        storePinnedGames();
        updateLists();
    }
    window.location.href = url;
}

const pinGame = index =>{
    const indexString = index+"";
    if (!pinnedGames.includes(indexString)){
        pinnedGames.push(indexString);
        storePinnedGames();
        updateLists();
    }
}

const unpinGame = index =>{
    const indexString = index+"";
    for (let i=0; i<pinnedGames.length; i++){
        if (pinnedGames[i] == indexString){
            pinnedGames.splice(i,1);
        }
    }

    storePinnedGames();
    updateLists();
}

const movePinnedGame = (gameIndex, change) => {
    const gameIndexString = gameIndex+"";
    let listIndex=-1;
    for (let i=0; i<pinnedGames.length; i++){
        if (pinnedGames[i] == gameIndexString){
            listIndex = i;
        }
    }
    if (listIndex>=0) {
        const targetGame = pinnedGames[listIndex];
        pinnedGames[listIndex] = pinnedGames[listIndex+change];
        pinnedGames[listIndex+change] = targetGame;
        storePinnedGames();
        updateLists();
    }
    
    
}

const updateLists = ()=> {
    let categoriesHtml = [];
    let pinnedHtml = "";

    pinnedGames.forEach( (g, i) => {
        const isPlayed = playedGames.includes(games[g].index+"");
        pinnedHtml += formatListing(games[g], true, isPlayed, i);
    });

    categories.forEach( c=>{
        categoriesHtml.push(`
            <li class="section-header">${c}</li>
        `)
    });

    games
    .forEach( (g, i)=> {
        i = i+"";
        let listIndex=0;
        if ( !pinnedGames.includes(i) ){
            const isPlayed = playedGames.includes(g.index+"");
            categoriesHtml[g.category] += formatListing(g, false, isPlayed, listIndex);
            listIndex++;
        }        
    });

    otherGamesElement.innerHTML = pinnedHtml + categoriesHtml.join("");

    
    [...document.querySelectorAll('.link')].forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            linkToGame(item.getAttribute("data-index"), item.getAttribute("href"));
        });
    });

    [...document.querySelectorAll('.pin-button')].forEach(function(item) {
        item.addEventListener('click', function() {
          pinGame(item.getAttribute("data-index"));
        });
    });

    [...document.querySelectorAll('.up-button')].forEach(function(item) {
        item.addEventListener('click', function() {
            movePinnedGame(item.getAttribute("data-index"), -1);
        });
    });

    [...document.querySelectorAll('.down-button')].forEach(function(item) {
        item.addEventListener('click', function() {
            movePinnedGame(item.getAttribute("data-index"), 1);
        });
    });

    [...document.querySelectorAll('.unpin-button')].forEach(function(item) {
        item.addEventListener('click', function() {
            unpinGame(item.getAttribute("data-index"), 1);
        });
    });

}

setTheme();
updateLists();
