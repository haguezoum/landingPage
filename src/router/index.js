import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "@/views/LandingPage";
import Testimonial from '@/components/Testimonial'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/Testimonial",
    name: "Testimonial",
    component: Testimonial,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    else if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  }
});

export default router;
