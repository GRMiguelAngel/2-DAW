
import { PokemonModel } from "../models/PokemonModel.js";
import { PokemonView } from "../views/PokemonView.js";
export class PokemonController {
  constructor() {
    this.model = new PokemonModel();
    this.view = new PokemonView();

    this.pokemonsFiltered = [];
    this.newDesireList = [];

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

    // Bind Cards pokemons
    this.currentSelectedPokemons =  [];
    
    this.cardPokemons = document.querySelectorAll(".card");
    this.cardPokemons.forEach((card, index) => {
      let currentPokemonId = this.model.pokemons[index].id;
      card.addEventListener("click", function(event){
        if (this.currentSelectedPokemons.includes(currentPokemonId)){
          this.deletePokemon(currentPokemonId, card);
          console.log(this.model.pokemons[index].name)
        }  else {
          this.pushPokemon(currentPokemonId, card);
          console.log(this.model.pokemons[index].name)
        }
      }.bind(this)
      );
    });
  }

  deletePokemon(currentPokemonId, card) {
    let card_index = this.currentSelectedPokemons.indexOf(currentPokemonId);
    this.currentSelectedPokemons.splice(card_index, 1);
    console.log(this.currentSelectedPokemons);
    card.classList.remove("selected");
  }
  
  pushPokemon(currentPokemonId, card) {
    this.currentSelectedPokemons.push(currentPokemonId);
    console.log(this.currentSelectedPokemons);
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
  
    console.log(this.pokemonsFiltered);
    this.view.displayPokemons(this.pokemonsFiltered);
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
    //console.log(this.newDesireList);
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
      console.log(this.newDesireList);

    } else if (window.confirm("¿Quieres deseleccionar los pokemons?")) {
      // ToDo desmarcar pokemons
      this.cardPokemons = document.querySelectorAll(".card");
      this.cardPokemons.forEach(card => {
        card.classList.remove('selected');
      });
      this.currentSelectedPokemons = [];

      };
      console.log(this.currentSelectedPokemons);
    }
  }

