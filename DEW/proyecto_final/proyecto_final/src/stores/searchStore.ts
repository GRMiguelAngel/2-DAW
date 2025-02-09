// Importaciones de librerías y archivos necesarios
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import AllProducts from '../locales/es.json';

// Definición de la tienda de búsqueda con Pinia
export const useSearchStore = defineStore('search', {
  // Estado inicial de la tienda
  state: () => ({
    // Valor de búsqueda inicial
    searchQuery: '', 
    // Lista de productos obtenida del archivo es.json
    products: AllProducts.productsInfo.products,
  }),
  // Acciones disponibles en la tienda
  actions: {
    // Actualiza el valor de búsqueda
    setSearchQuery(query: string) {
      this.searchQuery = query;
    },
  },
  // Obtenedores de la tienda
  getters: {
    // Filtra los cursos según el valor de búsqueda
    filteredCourses(state) {
      return state.products.filter((product) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
});