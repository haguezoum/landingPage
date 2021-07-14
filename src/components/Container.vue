<template>
  <main ref="mainSec">
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
};
</script>
<style lang="css" scoped></style>
