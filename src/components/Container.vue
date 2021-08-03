<template>
  <main ref="mainSec" class="w-full h-full relative " >
    <div
      class="overly overflow-y-hidden fixed w-full h-screen bg-gray-900 bg-opacity-50 hidden md:block lg:hidden filter blur-md z-30 transform pointer-events-none backdrop-filter backdrop-blur-xl"
      v-show="menuOpen"
      @click="menuOpen = !menuOpen"
    ></div>
    <AsaidMenu />
    <Home id="home" />
    <Service id="service" />
    <Statistics id="Statistics" />
    <Feature id="feature" />
    <Testimonials id="testimonials" />
    <Pricing id="pricing" />
    <FAQ id="faq" />
    <Footer id="footer" />
    <!-- <Tabs/> -->
  </main>
</template>

<script>
// import Button from "@/components/Button";
import AsaidMenu from "@/components/AsaidMenu"
import Home from "@/components/Home";
import Service from "@/components/Service";
import Statistics from "@/components/Statistics";
import Feature from "@/components/Feature";
import Testimonials from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// import Tabs from "@/components/Tabs";

export default {
  name: "Container",
  components: {
    // Button,
    AsaidMenu,
    Home,
    Service,
    Statistics,
    Feature,
    Testimonials,
    Pricing,
    FAQ,
    Footer,
    // Tabs
  },
  data() {
    return {};
  },
  methods: {
    showRef() {
      console.log(this.$refs["mainSec"]);
    },
  },
  created() {},
  computed:{
    menuOpen(){
      return this.$store.state.menuIsOpen
    }
  }
};
</script>
<style lang="css" scoped>

</style>
