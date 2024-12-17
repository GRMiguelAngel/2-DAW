<template>
  <div class="habilidades">
    <h2>{{ titulo }}</h2>
    <div class="tarjetas">
      <TarjetaHabilidad
        v-for="(habilidad, index) in habilidades"
        :key="index"
        :data="habilidad"
      />
    </div>
  </div>
</template>

<script>
import TarjetaHabilidad from "./TarjetaHabilidad.vue";
import habilidadesData from "../locales/es.json"; // Fichero de traducción

export default {
  name: "Habilidades",
  components: {
    TarjetaHabilidad,
  },
  data() {
    return {
      titulo: habilidadesData.skills.title || "Habilidades",
      habilidades: habilidadesData.skills.cards || [],
    };
  },
};
</script>

<style scoped>
.habilidades {
  padding: 16px;
}
.tarjetas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
</style>
