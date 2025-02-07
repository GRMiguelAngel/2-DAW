        <script lang="ts">
            export default {
            name: "ProductCard",
            props: {
                data: {
                type: Object,
                required: true,
                default: () => ({
                    title: "",
                    image: "",
                    description: "",
                    price: 10,
                }),
                },
            },
            };
        </script>

<template>
    <div class="card justify-content-center align-items-center">
            <h3 class="pt-2 title">{{ data.title }}</h3>
        <div class="product-image p-2">
            <img :src="data.image" >
        </div>  
        <div class="description">
            <p>
                {{ data.description }}
            </p>
            <p>
                Precio: {{ data.price }}
            </p>
        </div>
        
    </div>
</template>

<style>
.product-image img {
    height: 150px;
    border-radius: 8px;
}
</style>