<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"
        >Poke Home <img class="pokehome" src="./assets/pokehome.png"
      /></router-link>
    </div>
    <router-view />
    <language></language>
  </div>
</template>
<script>
import Language from "../src/components/Language.vue";
export default {
  components: {
    Language,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: absolute;
  left: 30px;
  top: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.pokehome {
  width: 30px;
}
</style>
