<template>
  <main ref="mainWindow" class="dark:bg-gray-800" :class="menuOpen?'overflow-hidden':'overflow-auto'">
    <Header class="" ref="header" @toggalDarkMode="sayDark"/>
    <Container />
  </main>
</template>

<script>
import Header from "@/components/Header";
import Container from "@/components/Container";
export default {
  name: "landingPage",
  components: {
    Header,
    Container,
  },
  methods: {
    sayDark(e) {
      e?this.$refs.mainWindow.classList.add("dark"):this.$refs.mainWindow.classList.remove("dark");
    }
  }, 
  computed:{
      menuOpen(){
      return this.$store.state.menuIsOpen
    }
  }  
  }
</script>
