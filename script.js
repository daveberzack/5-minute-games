import {games, categories} from "./games.js";
games.forEach( (g,i) => g.index = i);

const pinnedGameString = localStorage.getItem('pinnedGames')?.trim();
let pinnedGames = [];
if (pinnedGameString && pinnedGameString!="") pinnedGames = pinnedGameString.split(",");

const otherGamesElement = document.getElementById("other-games");

const formatListing = (game, isPinned, listIndex) => {

    const index = game.index;
    let buttonsHtml = "";
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

    return `
        <li>
            <a href="${game.url}">
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
        pinnedHtml += formatListing(games[g], true, i);
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
            categoriesHtml[g.category] += formatListing(g, false, listIndex);
            listIndex++;
        }        
    });

    otherGamesElement.innerHTML = pinnedHtml + categoriesHtml.join("");

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

updateLists();
