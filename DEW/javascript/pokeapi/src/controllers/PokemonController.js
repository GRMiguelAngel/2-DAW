
import { PokemonModel } from "../models/PokemonModel.js";
import { PokemonView } from "../views/PokemonView.js";
export class PokemonController {
  constructor() {
    this.model = new PokemonModel();
    this.view = new PokemonView();

    this.pokemonsFiltered = [];
    this.newDesireList = [];
    this.basket = [];

    // Bind button event
    document
      .querySelector("button")
      .addEventListener("click", () => this.init());
  }
  async init() {
    this.view.showLoading();
    try {
      await this.model.loadPokemons();
      this.view.hideLoading();
      this.view.showConsole();
      this.view.displayPokemons(this.model.getAllPokemons());
      this.bindingEvents();
    } catch (error) {
      console.error(error);
    }
  }
  async bindingEvents() {
    // Bind input filterWeight
    this.filterWeight = document.querySelector("#filtroPeso");
    this.filterWeight.addEventListener("keyup", () => this.pokemonsFiltering());

    // Bind input filterTotalPower
    this.filterTotalPower = document.querySelector("#filtroPoderTotal");
    this.filterTotalPower.addEventListener("keyup", () => this.pokemonsFiltering());
    // Bind input filterType
    this.filterType = document.querySelector("#filtroTipo");
    this.filterType.addEventListener("keyup", () => this.pokemonsFiltering());

    // Bind Añadir a Lista de deseos
    document
      .querySelector("#btnAgnadeListaDeseo")
      .addEventListener("click", this.añadirListaDeseo.bind(this));

    // Bind ver Lista de deseos
    document
    .querySelector("#btnVerLista")
    .addEventListener("click", this.verListaDeseo.bind(this));
    
    document
    .querySelector("#btnVerCesta")
    .addEventListener("click", this.verCesta.bind(this));

    document
    .querySelector("#btnAñadirCesta")
    .addEventListener("click", this.añadirCesta.bind(this));


    // Bind Cards pokemons
    this.currentSelectedPokemons =  [];
    
    this.cardPokemons = document.querySelectorAll(".card");
    this.cardPokemons.forEach((card, index) => {
      let currentPokemonId = this.model.pokemons[index].id;
      card.addEventListener("click", function(event){
        if (this.currentSelectedPokemons.includes(currentPokemonId)){
          this.deletePokemon(currentPokemonId, card);
        }  else {
          this.pushPokemon(currentPokemonId, card);
        }
      }.bind(this)
      );
    });
  }

  deletePokemon(currentPokemonId, card) {
    let card_index = this.currentSelectedPokemons.indexOf(currentPokemonId);
    this.currentSelectedPokemons.splice(card_index, 1);
    card.classList.remove("selected");
  }
  
  pushPokemon(currentPokemonId, card) {
    this.currentSelectedPokemons.push(currentPokemonId);
    card.classList.add('selected');

  }

  async pokemonsFiltering() {
    this.pokemonsFiltered = [];
    
    this.model.pokemons.forEach((pkm) => {
      const firstTypeCondition = pkm.pkm_type[0].type.name.includes(this.filterType.value);
      const secondTypeCondition = pkm.pkm_type.length > 1 && pkm.pkm_type[1].type.name.includes(this.filterType.value);
      const weightCondition = pkm.weight.toString().includes(this.filterWeight.value);
      const powerCondition = pkm.attack.toString().includes(this.filterTotalPower.value);

  
      if ((firstTypeCondition || secondTypeCondition) && weightCondition && powerCondition) {
        this.pokemonsFiltered.push(pkm);
      }
    });
  
    this.view.displayPokemons(this.pokemonsFiltered);
  }

  verCesta() {
    let pokemonNames = [];
    this.newDesireList.forEach(pkmId => {
      let pokemonName = this.model.pokemons.find(pkm => pkm.id == pkmId).name;
      pokemonNames.push(pokemonName);
    });
    alert("Cesta:\n" + pokemonNames.join("\n"));
    }

    añadirCesta() {
      let txt = "¿Quieres añadir los siguientes Pokemons a la cesta?";
      this.currentSelectedPokemons.forEach((pkmId) => {
        let pokemon = this.model.pokemons.find(pkm => pkm.id == pkmId);
        txt = txt + "\n " + pokemon.name;
      });

      if (window.confirm(txt)) {
        // ToDo Guardar en BBDD
        console.log("Guardando pokemons en la cesta...");
        this.currentSelectedPokemons.forEach((pkm) => {
          if (!this.basket.includes(pkm)){
            this.basket.push(pkm);
          }
      });
      }
    }

  verListaDeseo() {
    let pokemonNames = [];
    this.newDesireList.forEach(pkmId => {
      let pokemonName = this.model.pokemons.find(pkm => pkm.id == pkmId).name;
      pokemonNames.push(pokemonName);
    });
    alert("Lista de deseados:\n" + pokemonNames.join("\n"));
  }

  añadirListaDeseo() {
    let txt = "¿Quieres añadir los siguientes Pokemons a la Lista de Deseo?";
    this.currentSelectedPokemons.forEach((pkmId) => {
      let pokemon = this.model.pokemons.find(pkm => pkm.id == pkmId);
      txt = txt + "\n " + pokemon.name;
    });

    if (window.confirm(txt)) {
      // ToDo Guardar en BBDD
      console.log("Guardando nueva lista de deseo...");
      this.currentSelectedPokemons.forEach((pkm) => {
        if (!this.newDesireList.includes(pkm)){
          this.newDesireList.push(pkm);
        }
      });
    }
    
    if (window.confirm("¿Quieres deseleccionar los pokemons?")) {
      // ToDo desmarcar pokemons
      this.cardPokemons = document.querySelectorAll(".card");
      this.cardPokemons.forEach(card => {
        card.classList.remove('selected');
      });
      this.currentSelectedPokemons = [];
    }
  }
}