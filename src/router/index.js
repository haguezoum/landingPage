import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "@/views/LandingPage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
        offset: { x: 0, y: 60 },
      };
    }
  },
});

export default router;
