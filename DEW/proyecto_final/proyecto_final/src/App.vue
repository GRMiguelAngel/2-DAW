<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
