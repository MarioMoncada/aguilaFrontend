<template>
  <div>
    <div class="container d-flex">
      <button class="btn btn-warning" @click.prevent="previustItems()">
        Anterior
      </button>
      <div
        v-for="pokemon in pokemons.slice(value1, value2)"
        v-bind:key="pokemon.id"
        class="card"
        style="width: 18rem"
      >
        <img
          v-bind:src="pokemon.sprites.back_default"
          class="card-img-top"
          alt="pokemons"
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ pokemon.name }}</h5>

          <a href="#" @click="showDescription()" class="btn btn-primary"
            ><router-link class="ruta" to="/descripcion"
              >Descripción</router-link
            ></a
          >
        </div>
      </div>

      <button class="btn btn-warning" @click.prevent="nextItems()">
        Siguiente
      </button>
    </div>
    <div class="mt-3 d-flex"></div>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: ["pokemons"],
  mounted() {},

  data() {
    return {
      arrPokes: [],
      pokes: [],
      value1: 0,
      value2: 5,
    };
  },

  methods: {
    nextItems() {
      if (this.value1 >= 0 && this.value1 <= 10) {
        this.value1 += +5;
      }
      if (this.value2 <= 15) {
        this.value2 += +5;
      }
    },
    previustItems() {
      if (this.value1 <= 15 && this.value1 >= 5) {
        this.value1 += -5;
      }
      if (this.value2 >= 10) {
        this.value2 += -5;
      }
    },
    showDescription() {},
  },

  computed: {},
};
</script>

<style scoped>
.ruta {
  color: white;
  text-decoration: none;
}
</style>
