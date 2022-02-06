import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  es: {
    nextText: "Siguiente",
    previus: "Anterior",
    description: "Descripción",
    experience: "Experiencia",
    ability: "Abilidad",
    languages: "Lenguaje",
  },
  en: {
    nextText: "Next",
    previus: "Previus",
    description: "Description",
    experience: "Experience",
    ability: "Ability",
    languages: "Languages",
  },
};

export const i18n = new VueI18n({
  locale: "es",
  fallbackLocale: "en",
  messages,
});
