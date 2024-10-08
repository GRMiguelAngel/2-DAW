// PokemonController.js
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
      .addEventListener("click", this.mostrarListaDeseo.bind(this));

    // Bind Cards pokemons
    this.cardPokemons = document.querySelectorAll(".card");
    this.cardPokemons.forEach((card) => {
      card.addEventListener("click", () => this.pokemonsClicked(card.id));
    });
  }

  pokemonsClicked(cardId) {
    this.newDesireList.push(cardId);
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

  mostrarListaDeseo() {
    //console.log(this.newDesireList);
    let txt = "¿Quieres añadir los siguientes Pokemons a la Lista de Deseo?";
    this.newDesireList.forEach((pkm) => {
      txt = txt + " " + pkm;
    });

    if (window.confirm(txt)) {
      // ToDo Guardar en BBDD
      console.log("Guardando nueva lista de deseo...");
    } else if (window.confirm("¿Quieres deseleccionar los pokemons?")) {
      // ToDo desmarcar pokemons

      this.newDesireList = [];
    }
  }
}
