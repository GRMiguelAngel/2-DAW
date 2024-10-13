import Champion from "./champions.js"
import {close_detail, show_detail} from "./detail.js"

let champions = [];

async function get_champions() {
    const url = 'https://ddragon.leagueoflegends.com/cdn/14.20.1/data/es_ES/champion.json';
    let data = await fetch(url)
    .then(async(response) => {return (await response.json()).data})

    for (const key in data) {
        champions.push(new Champion(data[key]));
    }

    showChampions();
}

get_champions();


const showChampions = async () => {
    let aux = 0;
    const champs = document.getElementById("all_champions");
    for(const champion of champions) {
        let playstyle = '';
        let stats = '';
        if  (champion.playstyle !== undefined) {
            playstyle = `<b>Playstyle:</b> ${champion.playstyle}`;
    }
        for(let stat in champion.stats){
            stats += `<b>${stat}:</b> ${champion.stats[stat]}<br>`
        }
                
        champs.innerHTML +=    `<div class="front ${aux}">
        <div class="name">
            <i><b>${champion.name}, ${champion.title}</b></i>
        </div>
            <img class="front_image" src="${champion.image}">
        </div>
        <div class="detail">
            <button class="button" id="close" type="button"}>Cerrar</button><br>
            <div class="champ_info">
            <p><b>Nombre:</b> ${champion.name}</p>
            <p><b>Título:</b> ${champion.title}</p>
            <p><b>Rol:</b> ${champion.role}</p>
            <p>${playstyle}</p>
            <p>${champion.blurb}</p>
            <b>Stats:</b>
            <p>${stats}</p>
            

            <img class="detail_image" src="${champion.image}">
            </div>
        </div>
        `
    };
    const closeButtons = document.querySelectorAll('.button');
    closeButtons.forEach(button => {
        button.addEventListener('click', close_detail)
    });
        show_detail()
        aux++;
}

