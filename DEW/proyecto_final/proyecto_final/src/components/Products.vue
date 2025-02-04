<script lang="ts">
import ProductCard from './ProductItem.vue';
import productsData from "../locales/es.json";

export default {
    name: "Products",
    components: {
        ProductCard,
    },
    data() {
    return {
        title: productsData.productsInfo.title || "Habilidades",
        products: productsData.productsInfo.products || [],
    };
    },
};

</script>

<template>
    <main class="row">
        <ProductCard
        v-for="(product) in products"
        :data="product"
        class="col-12">
    </ProductCard>

    </main><br>

    <footer>Contactos</footer>
</template>

<style>
</style>