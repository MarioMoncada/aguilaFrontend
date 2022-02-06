<template>
  <div class="lenguaje">
    <button class="btn btn-danger" @click="show = true">
      {{ $t("languages") }}
    </button>
    <div v-if="show == true">
      <li
        v-for="lenguaje in languages"
        v-bind:key="lenguaje.locale"
        @click="changeLanguage(lenguaje.locale), (show = false)"
      >
        {{ lenguaje.title }}
      </li>
    </div>
  </div>
</template>

<script>
import { i18n } from "../plugins/i18n";

export default {
  name: "language",

  data: function () {
    return {
      languages: [
        { locale: "es", title: "Espanol" },
        { locale: "en", title: "Ingles" },
      ],
      show: false,
    };
  },
  methods: {
    changeLanguage(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style scoped>
.lenguaje {
  list-style: none;
  position: absolute;
  right: 40px;
  top: 10px;
}
li:hover {
  background-color: #0d6efd;
  color: white;
  cursor: pointer;
}
</style>
