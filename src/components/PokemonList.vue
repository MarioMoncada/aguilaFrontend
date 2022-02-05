<template>
  <div class="container d-flex">
    <div
      v-for="pokemon in pokemons"
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
        <h5 class="card-title">{{ pokemon.name }}</h5>

        <a href="#" class="btn btn-primary">Descripción</a>
      </div>
    </div>
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
    };
  },

  methods: {},
};
</script>

<style scoped></style>
