import Champion from "./champions.js"

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

console.log(champions);

const showChampions = async () => {
    const champs = document.getElementById("all_champions");
    for(let champion of champions) {

        champs.innerHTML +=    `<div class="front">
                                    <div class="name">${champion.name}, ${champion.title}</div>
                                    <img class="image" src="${champion.image}">
                                </div>`
    }
}

