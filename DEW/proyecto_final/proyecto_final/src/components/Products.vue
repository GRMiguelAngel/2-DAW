<script lang="ts">
import { defineComponent, computed } from 'vue';
import ProductCard from './ProductItem.vue';
import { useSearchStore } from '@/stores/searchStore';

export default defineComponent({
    name: "Products",
    
    components: {
        ProductCard,
    },
    
    setup() {
        // Instancia del store de búsqueda
        const searchStore = useSearchStore();
        
        // Propiedad computada que devuelve los productos filtrados
        const filteredProducts = computed(() => searchStore.filteredCourses);
        
        // Devuelve las propiedades que se pueden utilizar en el template
        return {
            filteredProducts
        };
    },
});
</script>
<template>
    <div id="products" class="container-fluid">
        <main class="row">
            <ProductCard
            v-for="(product) in filteredProducts"
            :data="product"
            class="justify-content-start col-5 m-1">
        </ProductCard>
    
        </main><br>
    </div>

</template>

<style>
#products {
    min-width: 1200px;
}
</style>