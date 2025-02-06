<script lang="ts">
import ProductCard from './ProductItem.vue';
import { useSearchStore } from '@/stores/searchStore';

export default {
    name: "Products",
    components: {
        ProductCard,
    },

    setup() {
    const searchStore = useSearchStore();
    return {
      filteredCourses: searchStore.filteredCourses, // Obtiene los cursos filtrados
    };
  },
};

</script>

<template>
    <main class="row">
        <ProductCard
        v-for="(product) in filteredCourses"
        :data="product"
        class="col-12">
    </ProductCard>

    </main><br>

</template>

<style>
</style>