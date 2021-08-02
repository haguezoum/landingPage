<template>
  <section
    id="container"
    class="bg-purple relative"
    :dir="$t('dir')"
  >
    <!-- <div class="w-full border-3 border-black p-4"> -->
      
    <!-- </div> -->
    <div class="relative home flex flex-wrap flex-row">
      <!-- start fixed asaid decoration -->
      <div
        class="
          absolute
          decoration
          w-full
          h-full
          flex
          overflow-hidden
          justify-between
          z-10
        "
      >
        <div class="relative left-decoration w-2/6 h-100"></div>
        <div class="relative right-decoration w-2/6 h-100"></div>
      </div>
      <!-- end fixed asaid decoration -->

      <!-- start content -->
      <div class="conent-fixed z-20 w-full lg:h-screen mt-20 lg:px-20 relative">
        <Model/>
        <div class="slider w-full mt-16 flex justify-center items-center">
          <!--end text -->
          <div class="text w-full lg:w-3/5">
            <div
              class="
                text-white
                flex
                justify-center
                text-center
                lg:text-left
                flex-col
                p-4
                lg:pl-10
              "
            >
              <h1
                class="
                  text-3xl
                  md:text-4xl
                  lg:text-5xl
                  mb-6
                  mx-8
                  lg:mx-0
                  font-bold
                  leading-relaxed
                "
              >
                {{$t('home.pricipal')}}
              </h1>
              <p
                class="
                  text-xl
                  md:text-2xl
                  lg:text-3xl
                  font-semibold
                  m-1
                  lg:w-5/6
                  my-6
                  md:my-20
                  lg:my-12
                  leading-loose
                "
              >
               {{$t('home.seconder')}}
              </p>
              <div
                class="
                  flex
                  md:justify-start
                  items-center
                  flex-col-reverse
                  sm:flex-row
                  lg:py-0w-full
                  md:w-3/5
                  space-x-2
                  px-8
                  lg:px-0
                "
              >
                <div class="w-full">
                  <button
                    class="
                      hover:bg-white hover:bg-opacity-10
                      rounded-full
                      md:w-full
                      w-full
                      sm:w-3/4
                      uppercase
                      py-1
                      pl-0
                      px-5
                      sm:px-0
                      mx-auto
                      text-whit
                      font-bold
                      lg:px-0
                      focus:outline-none
                      flex
                      justify-center
                      md:justify-start
                      items-center
                      space-x-24
                    "
                    @click="openModel"
                  >
                    <span class="">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11 text-purple-secondry hover:text-purple-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    {{$t('home.watchedButton')}}
                  </button>
                </div>
                <div class="w-full">
                  <button
                    class="
                      bg-green
                      rounded-full
                      hover:bg-green-primary
                      md:w-full
                      w-full
                      sm:w-3/4
                      uppercase
                      py-3
                      px-5
                      sm:px-0
                      text-whit
                      font-bold
                      lg:px-0
                      mb-8
                      sm:mb-0
                      mx-auto
                      focus:outline-none
                    "
                  >
                    {{$t('home.startedButton')}}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--end text -->

          <!--start img -->
          <div class="img w-2/5 hidden lg:block">
            <img src="../../public/img/desktop.png" class="w-full transform" />
            <!-- end img -->
          </div>
        </div>
      </div>
      <!-- end content -->

      <!-- start wave decoration -->
      <div
        class="h-28 z-20 w-full relative overflow-hidden deco-wave"
        :class="{ 'dark-wave': isThemDark }"
      >
        <div class="moved-wave relative z-10 w-full h-full"></div>
      </div>
      <!-- end wave decoration -->
    </div>
  </section>
  
</template>

<script>
import { mapGetters } from "vuex";
import Model from "@/components/Model"
export default {
  name: "Home",
  data() {
    return {
      // darkWave: `url("/img/deco-wave-light.png")`,
    };
  },
  methods:{
     openModel(){
            this.$store.commit('toggleModel');
        }
  },
  components:{
    Model
  },
  computed: {
    // isThemeIark() {
    //   return localStorage.getItem("dark");
    // },
    ...mapGetters({
      isThemDark: "isThemDark",
    }),
  },
  watch: {
    // themeIsDark() {
    //   return localStorage.getItem("dark");
    // },
  },
};
</script>

<style lang="css" scoped>
.deco-wave::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/img/deco-wave-light.png");
  left: 0;
  top: 10px;
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  z-index: 20;
}
.dark-wave::before {
  background-image: url("/img/deco-wave-dark.png") !important;
}
.moved-wave::before,
.moved-wave::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/img/deco-wave-light.png");
  top: 0;
  opacity: 0.2;
  background-size: cover;
  background-position: 0 0;
}
.moved-dark-wave::before ,
.moved-dark-wave::after {
  background-image: url("/img/deco-wave-dark.png") !important;
}
.moved-wave::before {
  left: 30%;
  animation: wavey 10s ease-in-out 0s infinite alternate;
}
.moved-wave::after {
  left: 70%;
  animation: wavey 8s ease-in-out 8s infinite alternate;
}
.left-decoration,
.right-decoration {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.3;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 0;
  /* background-attachment: fixed; */
}
.left-decoration {
  background-image: url("/img/left-deco.svg");
  transform: rotate(90deg);
  left: -50%;
}
.right-decoration {
  background-image: url("/img/right-deco.svg");
  transform: rotate(-90deg);
  right: -50%;
}

@keyframes wavey {
  from {
    left: 0%;
    top: 50%;
  }
  /* 25%  {left: 25%; top:30px}*/
  50% {
    top: 40%;
  }
  /*75%   {left:75%;top:30px} */
  to {
    left: 100%;
    top: 60%;
  }
}
</style>
