<template>
    <div class="tarjeta-proyecto m-4" @click="redirectToLink">
      <h3>{{ data.title }}</h3>
      <p>{{ data.description }}</p>
      <a :href="data.link" target="_blank" rel="noopener noreferrer" @click.stop>Ver más</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "TarjetaProyecto",
    props: {
      data: {
        type: Object,
        required: true,
        default: () => ({
          title: "",
          description: "",
          link: "",
        }),
      },
    },
    methods: {
      redirectToLink() {
        window.location.href = this.data.link;
      },
    },
  };
  </script>
  
  <style scoped>
  .tarjeta-proyecto {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow 0.3s;
  }
  .tarjeta-proyecto:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .tarjeta-proyecto a {
    color: #007bff;
  }
  </style>
  