<script lang="ts">
import { useSearchStore } from '@/stores/searchStore';
import { ref } from 'vue';

export default {
  data() {
    return {
      inputValue: '', // Almacena el valor del input
    };
  },
  methods: {
    updateSearch(){
      // Emite el valor de búsqueda al componente padre
      const searchStore = useSearchStore();
      searchStore.setSearchQuery(this.inputValue);
    },
  },
  
};




</script>

<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mt-0">
        <div class="container-fluid">
          <div class="row">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <router-link class="navbar-brand" v-bind:to="{ name: 'home'}" >Tienda</router-link>
                <li class="nav-item p-1">
                <router-link class="nav-link" v-bind:to="{ name: 'about'}">Hola</router-link>
                </li>
                <form class="form-inline my-2 my-lg-0 d-flex">
                  <input class="form-control mr-sm-2" type="search" id="search-bar" placeholder="Search" @input="updateSearch" v-model="inputValue">
                  <button class="btn btn-outline-success my-2 my-sm-0 ms-1" id="search-button" type="submit" @click.prevent>Search</button>
                </form>
                <li class="nav-item p-1">
                  <router-link class="nav-link ml-5" v-bind:to="{ name: 'profile'}">Perfil</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
</template>

<style>
</style>
