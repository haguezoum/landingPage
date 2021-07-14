import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import animation from "./directives/animation";
import "./assets/tailwind.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "./i18n";

Vue.config.productionTip = false;
Vue.directive("animation", animation);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
