<template>
  <div class="home">
    <pokemon-list v-bind:pokemons="pokemons"> </pokemon-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "Home",

  components: {
    PokemonList,
  },
  mounted() {
    this.idIncreasing(10);
    this.fetchPokes();
  },
  data: function () {
    return {
      pokemons: [],
    };
  },
  methods: {
    fetchPokes(id) {
      let url = "https://pokeapi.co/api/v2/pokemon/";

      fetch(url + id)
        .then((response) => response.json())
        .then((data) => this.pokemons.push(data));
    },
    idIncreasing(number) {
      for (let i = 0; i <= number; i++) {
        this.fetchPokes(i);
      }
    },
  },
};
</script>
