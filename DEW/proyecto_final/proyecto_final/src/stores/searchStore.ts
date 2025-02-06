import { defineStore } from 'pinia';
import AllProducts from '../locales/es.json';

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '', // Estado de la búsqueda 
    products: AllProducts.productsInfo.products,
  }),
  actions: {
    setSearchQuery(query: string) {
      // Actualiza el valor de búsqueda
      this.searchQuery = query;
    },
  },
  getters: {
    filteredCourses(state) {
      // Filtra los cursos según el valor de búsqueda
      return state.products.filter((product) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  
});