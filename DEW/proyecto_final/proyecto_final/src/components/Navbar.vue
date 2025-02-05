<script setup lang="ts">
const filter = document.querySelector<HTMLInputElement>("#search-bar");
const form = document.getElementById('search-button')

function filtering() {
    const items = document.querySelectorAll<HTMLElement>(".title");
    const searchValue = filter.value.toLowerCase();
    console.log(items)

    items.forEach((item) => {
      if (item.textContent && item.textContent.toLowerCase().includes(searchValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };


if (form) {
  form.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

</script>

<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mt-0">
        <div class="container-fluid">
          <div class="row">

            <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul class="navbar-nav">
                <router-link class="navbar-brand" v-bind:to="{ name: 'home'}" >Tienda</router-link>
                <li class="nav-item p-1">
                <router-link class="nav-link" v-bind:to="{ name: 'about'}">Hola</router-link>
                </li>
                
                <li class="nav-item p-1">
                <router-link class="nav-link" v-bind:to="{ name: 'contact'}">Contacto</router-link>
                </li>
                <form class="form-inline my-2 my-lg-0 d-flex col-6">
                  <input class="form-control mr-sm-2" type="search" id="search-bar" placeholder="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0 ms-1" id="search-button" type="submit" @click.prevent="filtering()">Search</button>
                </form>
              </ul>
            </div>
            <router-link class="nav-link ml-5" v-bind:to="{ name: 'profile'}">Perfil</router-link>
          </div>
        </div>
      </nav>
</template>

<style>
</style>
