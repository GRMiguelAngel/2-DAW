import Pokemon from "./pokemons.js";

var pokemons = []

const button = document.querySelector("button");

button.addEventListener("click", () => {
    // alert("Me han pulsado.");
    document.querySelectorAll("#filtro").forEach( (e) => {
        // console.log(e); 
        e.style.visibility = "visible";
    })
});

button.addEventListener("click", () => {
    // alert("Me han pulsado.");
    document.querySelectorAll("#btn_lista_deseo").forEach( (e) => {
        // console.log(e); 
        e.style.visibility = "visible";
    })
});

button.addEventListener("click", () => {
    let lista_pokemon = document.querySelector(".lista_pokemon");
        // console.log(e); 
        lista_pokemon.style.visibility = "visible";

    startPokemon();
    });

function mostrar_pokemon() {
    document.querySelector(".loading_datum").style.visibility = "visible"
    }
    
    
const startPokemon = async() => {
    for ( var i = 1; i <= 151; i++){
        try {
            await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
        .then(function (result) {
            return result.json();
        })
        .then(function (data){
            // console.log(data);
            const pokemon = new Pokemon(data);
            pushPokemon(pokemon);
        })
        } catch (error) {
            alert(`There is an error: ${error}`)
        }
    }
    await showPokedex();
};

function pushPokemon (pokemon){
    pokemon.push(pokemon);
}

const showPokedex = async () => {
    // console.log(pokemons);
    document.querySelector("#pokedex").style.visibility = "visible";

    const pokedex = document.getElementById("pokedex");

    document.querySelector(".loading_datum").style.visibility = "visible"
    for (var i = 0; i <= pokemons.length; i++){
        var aux = 0;
        while(aux != pokemons[i].pkm_type.length){
            if (aux == 0) var tipo1 = pokemons[i].pkm_type[aux].type.name;
            if (aux == 1) var tipo2 = pokemons[i].pkm_type[aux].type.name;
            else tipo2 = "";
            aux++; 
        }
        pokedex.innerHTML += `
        <div class="card">
            <img src="${pokemons[i].pkm_back}">
            <img src="${pokemons[i].pkm_front}">
            <br>
            ${pokemons[i].id}. ${pokemons[i].name}.
            <br>
            ${tipo1} ${tipo2}
        </div>
        `;
    }
}