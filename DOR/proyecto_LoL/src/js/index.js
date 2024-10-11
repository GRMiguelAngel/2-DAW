import Champion from "./champions.js"
import {close_detail, show_detail} from "./detail.js"

let champions = [];

async function get_champions() {
    const url = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';
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
    for(let champion of champions) {
        
        champs.innerHTML +=    `<div class="front ${aux}">
        <div class="name"><i><b>${champion.name}, ${champion.title}</b></i></div>
        <img class="image" src="${champion.image}">
        </div>
        <div class="detail">
            <button class="button" id="close" type="button" onclick=${close_detail()}>Cerrar</button>
            ${champion.blurd}
        </div>
        `
        console.log(champion.blurd)
        show_detail()
        aux++;
    }
}

