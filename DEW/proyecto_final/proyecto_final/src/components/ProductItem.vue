
<template>
    <div class="card d-flex justify-content-center align-items-center">
        <div class="title pt-2">
            <h3>{{ data.title }}</h3>
        </div>
        <div class="product-image p-2">
            <img :src="data.image" >
        </div>
        <div class="description">
            <p>
                {{ data.description }}
            </p>
            <p>
                Price: {{ data.price }}
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