import {games, categories} from "./games.js";

const otherGamesElement = document.getElementById("other-games");
const updateLists = ()=> {
    let categoriesHtml = [];
    categories.forEach( c=>{
        categoriesHtml.push(`
            <li class="section-header">${c}</li>
        `)
    });

    games.forEach( g=> {
        categoriesHtml[g.category] += `
            <li><a href="${g.url}">
                <img src="./img/icons/${g.image}"/>
                <h3>${g.name}</h3>
                <p>${g.caption}</p>
            </a></li>
        `  
    });
    otherGamesElement.innerHTML = categoriesHtml.join("");
}

updateLists();