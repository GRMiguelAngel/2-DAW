<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>

  <Navbar></Navbar>

  <div class="container-fluid">
    <RouterView></RouterView>
  </div>

<Footer></Footer>

</template>

<style scoped>

</style>
