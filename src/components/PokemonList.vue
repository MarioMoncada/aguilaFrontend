<template>
  <div class="">
    <div class="card">
      <h2>Nombre</h2>
    </div>
    <button @click="splittingArray1()">llenar variable</button>
    <button @click="splittingArray()">dividiendo</button>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: ["pokemons"],
  mounted() {
    this.splittingArray();
  },

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
