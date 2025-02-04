<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
function increment() {
count.value++;
}
</script>

<template>
    <div @click="increment">
        Hola, pulsa aquí: {{ count }}
        <route-link to=""></route-link>
    </div>
</template>

<style scoped></style>