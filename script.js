import {games, categories} from "./games.js";

const pinnedGames = localStorage.getItem('pinnedGames')?.split(',') || [];

const otherGamesElement = document.getElementById("other-games");

const formatListing = (g, i, isPinned) => {
    const buttonsHtml = isPinned ? 
        `<div class="button up-button"><img src="./img/up.png"></div><div class="button down-button"><img src="./img/down.png"></div>`
        :
        `<div class="button pin-button"><img src="./img/pin.png"></div>`;

    return `
        <li>
            <a href="${g.url}">
                <img src="./img/icons/${g.image}"/>
                <h3>${g.name}</h3>
                <p>${g.caption}</p>
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

const movePinnedGame = (index, change) => {
    const targetGame = pinnedGames[index];
    pinnedGames[index] = pinnedGames[index+change];
    pinnedGames[index+change] = targetGame;
    updateLists();
}

const updateLists = ()=> {
    let categoriesHtml = [];
    let pinnedHtml = "";

    pinnedGames.forEach( (g,i) => {
        pinnedHtml += formatListing(games[g], i, true);
    });

    categories.forEach( c=>{
        categoriesHtml.push(`
            <li class="section-header">${c}</li>
        `)
    });

    games
    .forEach( (g, i)=> {
        if ( !pinnedGames.includes(i) ){
            categoriesHtml[g.category] += formatListing(g, i, false)
        }
        
    });

    const dividerHtml = "<h2>---------</h2>";

    otherGamesElement.innerHTML = pinnedHtml + dividerHtml + categoriesHtml.join("");
}

updateLists();
