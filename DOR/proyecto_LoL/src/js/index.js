import Champion from "./champions.js"

let champions = [];

async function get_champions() {
    const url = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';
    let data = await fetch(url)
    .then(async(response) => {return (await response.json()).data})

    for (const key in data) {
        champions.push(new Champion(data[key]));
    }
}


get_champions();

console.log(champions);

const showChampions = async () => {
    const champs = document.getElementById("all_champions");
    // Iteramos sobre cada elemento del array pokemons
    for(this.id of champions) {
        }
        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor pokedex
        pokedex.innerHTML +=    `<div class="card">
                                    <img class="back" src="${champions[this.id]}">
                                    <img class="front" src=""><br>
                                    ${pokemons[index].id}. ${pokemons[index].name}<br>
                                    <div class="types">
                                    ${tipo1} ${tipo2}
                                    </div>
                                    <div class="size">
                                    height: ${pokemons[index].pkm_height}
                                    weight: ${pokemons[index].pkm_weight}
                                    </div>
                                </div>`
    }
}
