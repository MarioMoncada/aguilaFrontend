<template>
  <div class="container">
    <div class="card tarjeta bg-warning p" style="width: 230px">
      <h3 class="card-title pt-2 text-danger">{{ poke.name }}</h3>

      <img
        v-bind:src="poke.sprites.back_default"
        class="card-img-top pokemon-card"
        alt="..."
      />
      <div class="card-body my-3 text-danger fw-bold">
        <h6 class="fw-bold">{{ $t("experience") }}</h6>
        <span>{{ poke.base_experience }}</span>
      </div>
      <ul class="list-group border-0">
        <li class="list mb-1 bg-primary">
          {{ $t("ability") }} #1 : {{ poke.abilities[0].ability.name }}
        </li>
        <li class="list mb-1 bg-primary">
          {{ $t("ability") }} #2 : {{ poke.abilities[1].ability.name }}
        </li>
      </ul>
    </div>
    <div class="img-container">
      <img class="imgs" v-bind:src="poke.sprites.back_female" />
      <img class="imgs" v-bind:src="poke.sprites.back_shiny" />
      <img class="imgs" v-bind:src="poke.sprites.back_shiny_female" />
      <img class="imgs" v-bind:src="poke.sprites.front_default" />
      <img class="imgs" v-bind:src="poke.sprites.front_female" />
      <img class="imgs" v-bind:src="poke.sprites.front_shiny" />
      <img class="imgs" v-bind:src="poke.sprites.front_shiny_female" />
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main.js";
export default {
  name: "PokemonDescriptions",

  data: function () {
    return {
      poke: [],
    };
  },
  created() {
    EventBus.$on("dataPoke", (data) => {
      this.poke = data;
    });
  },
};
</script>

<style scoped>
.tarjeta {
  margin-left: 40%;
  margin-top: 30px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  border-radius: 20px;
}
.img-container {
}
.pokemon-card {
  border-radius: 50%;
  background-color: white;
  width: 90%;
  margin-left: 12px;
}
.list {
  list-style: none;
  color: white;
  padding: 10px;
  width: 90%;
  margin-left: 12px;
  border-radius: 20px;
}
h3 {
  text-transform: uppercase;
}
.imgs:hover {
  width: 200px;

  cursor: pointer;
}
</style>
