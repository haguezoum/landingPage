<template>
  <main ref="mainWindow">
    <Header class="" ref="header"/>
    <Container  />
  </main>
</template>

<script>
import Header from "@/components/Header";
import Container from "@/components/Container";
export default {
  name:'landingPage',
  components: {
    Header,
    Container
  },
};
</script>
