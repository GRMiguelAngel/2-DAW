<template>
    <div class="tarjeta-habilidad">
      <h3>{{ data.name }}</h3>
      <p>{{ data.description }}</p>
      <div class="nivel">
        <span>Nivel:</span>
        <div class="barra-nivel">
          <div class="nivel-actual" :style="{ width: `${data.level * 20}%` }"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TarjetaHabilidad",
    props: {
      data: {
        type: Object,
        required: true,
        default: () => ({
          logo: "",
          name: "",
          description: "",
          level: 0, // Nivel entre 0 y 5
        }),
      },
    },
  };
  </script>
  
  <style scoped>
  .tarjeta-habilidad {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  .tarjeta-habilidad:hover {
    transform: scale(1.05);
  }
  .logo {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }
  .nivel {
    margin-top: 16px;
  }
  .barra-nivel {
    background-color: #f1f1f1;
    border-radius: 8px;
    overflow: hidden;
    height: 10px;
    width: 100%;
    margin-top: 8px;
    position: relative;
  }
  .nivel-actual {
    background-color: #4caf50;
    height: 100%;
    transition: width 0.3s ease-in-out;
  }
  </style>
  