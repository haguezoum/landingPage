<template>
  <main ref="mainWindow">
    <Header class="" ref="header" @click="toggelHeaderClass"/>
    <Container  />
  </main>
</template>

<script>
import Header from "@/components/Header";
import Container from "@/components/Container";
export default {
  name:'landingPage',
  methods:{
      toggelHeaderClass(){
        // let navbar = this.$refs['navbar'];
        // if(window.scrollY> 0){
        //   navbar.classList.add('bg-red-500')
        //   console.log('hello')
        // }else{
        //   console.log('no way');
        // }

        // console.log(this.$refs['mainWindow']);
        console.log('test scroll');
      }
  },
  components: {
    Header,
    Container
  },
};
</script>
