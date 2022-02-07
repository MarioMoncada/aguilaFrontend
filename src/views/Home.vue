<template>
  <div class="home">
    <img src="../assets/imgtitle.svg" /><br />
    <img class="ball" src="../assets/pokeball.png" />

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
    this.idIncreasing(40);
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
        .then((data) => this.pokemons.push(data))
        .catch((error) => console.error("Error:", error));
    },
    idIncreasing(number) {
      for (let i = 1; i <= number; i++) {
        this.fetchPokes(i);
        console.log(i);
      }
    },
  },
};
</script>
<style scoped>
img {
  width: 300px;
  height: 150px;
}
.ball {
  width: 100px;
  height: 100px;
  margin-top: -50px;
}
</style>
