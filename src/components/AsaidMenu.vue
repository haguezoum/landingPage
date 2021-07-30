<template>
  <aside class=" h-screen w-screen sm:w-1/3 overflow-y-hidden shadow-lg bg-purple block lg:hidden absolute z-40 top-0 left-0"
          @blur="close"
          v-if="menuOpen"
  >
          <div class="h-full w-full flex flex-col justify-start items-start py-32 px-10 font-medium relative"
            v-if="menuOpen"
          >
            <nav class="pb-10 border-b w-full">
              <ul class="flex w-full flex-col text-md text-left text-white">
                <li
                  v-for="(navLink, index) in navLinks"
                  :key="index"
                  :name="navLink.name"
                  :title="navLink.name"
                  class="hover:border-b-4 text-2xl hover:border-white cursor-pointer p-2 px-3 transition-all ease-in-out duration-100 delay-100 hover:opacity-40 hover:bg-purple-900 bg-opacity-30"
                  role="nav"
                >
                  <router-link :to="{ path: '/', hash: navLink.id }">
                    {{ navLink.name }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
</template>

<script>
export default {
  name:'AsidMenu',
  props:["open"],
  methods:{
    close(){

    }
  },
  computed:{
    navLinks(){
      return this.$store.state.navLinks;
    },
    menuOpen(){
      return this.$store.state.menuOpen
    }
  }
}
</script>

<style>

</style>