<template>
  <div
    class="
      lg:px-12
      top-0
      left-0
      w-full
      fixed
      z-30
      bg-transparent
      duration-300
      transform
      transition-all
      delay-200
      ease-in-out
    "
    id="navbar"
    ref="navbar"
    :class="[
      { 'bg-purple-primary py-4 px-4': !view.atTopOfPage },
      { 'p-7 px-8': view.atTopOfPage },
    ]"
    :dir="$t('dir')"
  >
    
    <div
      class="
        header-area
        flex
        w-full
        h-full
        justify-between
        items-center
        my-auto
        mx-auto
        relative
      "
    >
      <!--left-->
      <div
        class="logo nav-links w-1/2 h-full sm:w-2/5 lg:w-3/5 flex items-center "
      >
        <div class="flex space-x-4 justify-between lg:justify-start items-center lg:w-1/5">
          <div class="lg:hidden relative w-1/3 ">
            <button
              class="
                text-white
                w-12
                h-12
                relative
                focus:outline-none
                hover:bg-purple-600 hover:bg-opacity-20
                rounded-full
                ml-3
              "
              @click.prevent="toggleMenu"
              style="z-index: 999999"
            >
              <span class="sr-only">Open menu</span>

              <!--start humberger menu-->
              <div
                class="
                  block
                  w-5
                  absolute
                  left-4
                  top-1/2
                  transform
                  -translate-x-1/2 -translate-y-1/2
                "
              >
                <span
                  aria-hidden="true"
                  class="
                    block
                    absolute
                    h-0.5
                    w-7
                    bg-current
                    transform
                    transition
                    duration-500
                    ease-in-out
                  "
                  :class="{ 'rotate-45': menuOpen, ' -translate-y-1.5': !menuOpen }"
                ></span>
                <span
                  aria-hidden="true"
                  class="
                    block
                    absolute
                    h-0.5
                    w-5
                    bg-current
                    transform
                    transition
                    duration-500
                    ease-in-out
                  "
                  :class="{ 'opacity-0': menuOpen }"
                ></span>
                <span
                  aria-hidden="true"
                  class="
                    block
                    absolute
                    h-0.5
                    w-7
                    bg-current
                    transform
                    transition
                    duration-500
                    ease-in-out
                  "
                  :class="{ '-rotate-45': menuOpen, ' translate-y-1.5': !menuOpen }"
                ></span>
              </div>
              <!--end humberger menu-->
            </button>
          </div>
          <router-link :to="{ path: '/', hash: '#home' }">
            <div
              class="logo-img p-4 md:p-0 w-2/3 relative "
              style="z-index: 999999"
            >
                <img src="../assets/logo.png" alt="Logo" width="100%" srcset="">
              <!-- <img src="/img/logo.png" alt="" srcset="" class="w-2/5 md:w-2/6 lg:w-2/5 xl:w-1/5 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" style="width:50px;"/> -->
            </div>
          </router-link>
        </div>
        <!-- nav links -->
        <nav class="nav-links hidden lg:flex">
          <ul
            class="
              flex
              w-full
              justify-between
              space-x-4
              font-bold
              text-md text-white
              
            "
          >
            <li
              v-for="(navLink, index) in navLinks"
              :key="index"
              :name="navLink.name"
              :title="navLink.name"
              class="
                navLink
                relative
                hover:border-b-4
                rounded-full
                hover:border-white
                cursor-pointer
                p-2
                px-3
                transition-all
                ease-in-out
                duration-100
                delay-100
                hover:opacity-40
                hover:bg-purple-900
                bg-opacity-30
              "
            >
              <router-link :to="{ path: '/', hash: navLink.id }">
                {{ $t(navLink.name) }}
              </router-link>
            </li>
          </ul>
          <!-- <p class="font-bold text-black text-3xl">{{$t('message')}}</p> -->
        </nav>
      </div>
      <!-- ---------------------------------------------------------------- -->
      <!--right-->
      <div class="menu w-1/2 h-full sm:w-3/5 lg:w-2/5">
        <div class="flex justify-end items-center space-x-4 px-4">
          <!-- dropwdown -->
          <div class="dropwdown relative" @click="langOpen = !langOpen">
            <span class="overflow-hidden shadow-lg text-white">
              <button
                class="
                  flew
                  flex
                  justify-between
                  rounded-full
                  hover:bg-opacity-20 hover:bg-purple-50
                  hover:bg-purple-socondry
                  transition
                  ease-in-out
                  items-center
                  space-x-4
                  px-4
                  py-2
                  focus:outline-none
                "
                type="button"
                aria-haspopup="true"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </span>
              </button>
            </span>
            <!-- dropdown-menu -->
            <div
              class="
                dropdown-menu
                transition-all
                duration-300
                transform
                origin-top-right
                -translate-y-2
                scale-95
                rounded-sm
              "
              v-if="langOpen"
            >
              <div
                class="
                  dropdown-body
                  absolute
                  -left-2
                  mt-2
                  origin-top-right
                  bg-white
                  opacity-80
                  border border-gray-200
                  rounded-md
                  shadow-xl
                  outline-none
                "
              >
                <div
                  class="
                    flex flex-col
                    items-center
                    justify-center
                    text-purple-700
                  "
                >
               <p class="w-full hover:bg-white  cursor-pointer px-4 py-1 my-2 hover:bg-purple-socondry transition-all ease-in-out duration-300 transform  hover:py-4" :tabindex="index+1"  v-for="language,index in languages" :key="index" v-text="language.language"  @click="changeLang(language.languageCode)"></p>                    
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <!-- dark mode toggal -->
            <span
              class="
                h-10
                overflow-hidden
                px-4
                py-2
                rounded-full
                hover:bg-opacity-20
                hover:bg-purple-socondry
                cursor-pointer
                transition
                  ease-in-out
              "
              @click="darkMode"
            >
              <!-- sun -->
              <transition
                name=""
                enter-active-class="animate__animated animate__fadeInLeft animate__slow"
                leave-active-class="animate__animated animate__fadeOutRight animate__fast"
              >
                <svg
                  v-if="isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-yellow-300 h-7 w-7 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </transition>

              <!-- moon -->
              <transition
                name=""
                enter-active-class="animate__animated animate__fadeInLeft animate__slow"
                leave-active-class="animate__animated animate__fadeOutRight animate__fast"
              >
                <svg
                  v-if="!isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-white h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </transition>
            </span>
          </div>
        </div>
      </div>
      <!-- start asaid menu -->
      <transition
        name=""
        enter-active-class=" animate__animated  animate__backInLeft animate__faster "
        leave-active-class="animate__animated animate__backOutLeft animate__fast"
      >
        
      </transition>
      <!-- end asaid menu -->
    </div>
  </div>
</template>

<script>
// import Button from "@/components/Button";
export default {
  name: "Header",
  components: {
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
      langOpen: false,
      isDark: false,
       languages:[
        {language:'الداريجة',languageCode:'dj'},
        {language:'العربية' ,languageCode:'ar'},
        {language:'Francais' ,languageCode:'fr'},
        {language:'English'  ,languageCode:'en'},
        {language:'ⴰⵎⴰⵣⵉⵖ'   ,languageCode:'mz'},
      ]
    };
  },
  beforeMount(){
    window.addEventListener("scroll", this.togelNavBar);
  },
  methods: {
    togelNavBar() {
      if (window.pageYOffset > 130) {
        if (this.view.atTopOfPage) {
          this.view.atTopOfPage = false;
        }
      } else {
        if (!this.view.atTopOfPage) {
          this.view.atTopOfPage = true;
        }
      }
    },
    darkMode() {
      if (this.isDark) {
        this.$store.commit("SET_THEM_DARK", false);

        this.isDark = false;
      } else {
        this.$store.commit("SET_THEM_DARK", true);
        this.isDark = true;
      }
      this.$emit("toggalDarkMode", this.isDark);
    },
    changeLang(e) {
      localStorage.setItem("language",e);
      this.$i18n.locale = e;
    },
    toggleMenu(){
      this.$store.commit('toggleMenu');
    }
  },

  computed: {
    navLinks(){
      return this.$store.state.navLinks;
    },
    menuOpen(){
      return this.$store.state.menuIsOpen;
    }
  },
};
</script>

<style lang="css" scoped>
#navbar {
  z-index: 8888;
}
.navLink::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0%;
  height: 5px;
  margin-top: 1rem;
  background-color: aliceblue;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}
.navLink:hover::after {
  width: 100%;
  left: 0%;
}
</style>
