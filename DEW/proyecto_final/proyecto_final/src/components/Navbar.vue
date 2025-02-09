/*
<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue';
import { useSearchStore } from '@/stores/searchStore';

export default defineComponent({
  name: 'NavbarComponent',
  setup() {
    // Creamos una referencia reactiva para almacenar el valor del input de búsqueda
    const inputValue = ref('');
    // Obtenemos la instancia de la store de búsqueda
    const searchStore = useSearchStore();

    // Función que actualiza la búsqueda en la store
    const updateSearch = () => {
      searchStore.setSearchQuery(inputValue.value);
    };

    // Nos suscribimos a los cambios en la store de búsqueda
    const unsubscribe = searchStore.$subscribe((mutation, state) => {
      console.log('Cambio en el estado de la store:', state);
      console.log('Mutación:', mutation);
    });

    // Al desmontar el componente, nos desuscribimos de la store
    onUnmounted(() => {
      unsubscribe();
    });

    // Devolvemos las propiedades y funciones que se utilizarán en el template
    return {
      inputValue,
      updateSearch,
    };
  },
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mt-0">
    <div class="container-fluid">
      <div class="row">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link class="navbar-brand" :to="{ name: 'home' }">Tienda</router-link>
            <li class="nav-item p-1">
              <router-link class="nav-link ml-5" :to="{ name: 'profile' }">Perfil</router-link>
            </li>
            <form class="form-inline my-2 my-lg-0 d-flex" @submit.prevent="updateSearch">
              <input
                class="form-control mr-sm-2"
                type="search"
                id="search-bar"
                placeholder="Search"
                v-model="inputValue"
              />
              <button class="btn btn-outline-success my-2 my-sm-0 ms-1" id="search-button" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
*/