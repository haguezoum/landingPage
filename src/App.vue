<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name:'App',
  data(){

  },
  mounted(){
    if(!localStorage.getItem('language')){
      localStorage.setItem('language','en');//deault language
    }
  }
}
</script>
<style lang="scss"></style>
