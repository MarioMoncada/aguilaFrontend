import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { i18n } from "@/plugins/i18n";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

export const EventBus = new Vue();

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
