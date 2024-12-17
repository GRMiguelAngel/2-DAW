<template>
  <div class="seccion-proyectos">
    <h2>{{ titulo }}</h2>
    <div class="tarjetas">
      <TarjetaProyecto
        v-for="(proyecto, index) in proyectos"
        :key="index"
        :data="proyecto"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TarjetaProyecto from "./TarjetaProyecto.vue";
import { CardData } from "../interfaces/CardData.ts";
import proyectosData from "../locales/es.json"; // Cargar archivo de traducción

export default defineComponent({
  name: "Proyectos",
  components: {
    TarjetaProyecto,
  },
  setup() {
    const proyectos = ref<CardData[]>(proyectosData.projects.cards || []);
    const titulo = ref<string>(proyectosData.projects.title || "Proyectos");
    return { proyectos, titulo };
  },
});
</script>

<style scoped>
/* Estilos específicos */
</style>
