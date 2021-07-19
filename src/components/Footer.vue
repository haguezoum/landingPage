<template>
  <footer class="w-full bg-purple relative">
    <div class="decoration absolute top-0 left-0 w-full" 
        :class="{ 'dark-wave': isThemDark }"
    >
      <!-- wave decoration :) -->
    </div>

    <div
      class="content flex flex-col justify-center items-center p-2 px-20 py-52"
    >
      <!-- part 1 -->
      <div class="header w-full titile text-center mb-2">
        <h3 class="text-3xl text-white font-bold py-6">
          What are you waiting for?
        </h3>
        <button
          class="
            py-2
            mt-6
            px-6
            uppercase
            text-white
            bg-green-primary
             bg-opacity-60
            text-lg
            rounded-full
            hover:bg-green
          "
        >
          Get started
        </button>
      </div>

      <!-- part 2 -->
      <div
        class="
          content
          w-full
          flex
          justify-between
          flex-col
          lg:flex-row
          items-start
          p-2
        "
      >
        <div class="img lg:w-1/4 flex justify-end flex-col items-center mb-2 mx-auto">
          <img src="/img/icone-3.png" alt="" srcset="" class="w-1/2" />
          <p class="text-2xl text-white font-semibold">sKwila.ma</p>
        </div>

        <div class="justify-around items-center w-full lg:h-2/4 p-2 lg:px-20">
          <div class="flex flex-col lg:hidden">

            <div class="group dropwdown relative w-3/4  mx-auto  mb-11"  v-for="mapItem,index in siteMap" :key="index">
              <span class="overflow-hidden shadow-lg w-full text-white hover:border-white hover:border rounded-md ">
                <button class="flew flex justify-between w-full hover:text-purple-900 items-center  space-x-4 px-4 py-2  focus:outline-none" type="button" aria-haspopup="true">
                  <span v-text="mapItem.title"></span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                  </span>
                </button>
              </span>
              <!-- dropdown-menu -->
              <div class="dropdown-menu group-hover:opacity-100 group-hover:z-50 opacity-0 transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 rounded-sm" >
                  <div class="dropdown-body absolute -left-2 mt-2 origin-top-right bg-white   border border-gray-200  rounded-md shadow-xl outline-none">
                    <div class="flex flex-col  items-center justify-center text-purple-700">
                        <p class="w-full hover:bg-white  cursor-pointer px-4 py-1 my-2  transition-all ease-in-out duration-300 transform  rounded-md hover:py-4" v-for="item , index in mapItem.items" :key="index" v-text="item"></p>
                    </div>
                  </div>
              </div>

          </div>
        </div>
          <!-- ************************ -->
          <div
            class="hidden lg:flex w-full justify-around items-start felx-row"
          >
            <div
              class="px-4 text-white"
             v-for="mapItem,index in siteMap" :key="index"
            >
              <div class="title w-full text-left px-4 mb-9 text-md font-bold">
                {{mapItem.title}}
              </div>
              <div class="list w-full">
                <ul
                  class="
                    w-full
                    flex flex-col
                    justify-start
                    text-md
                    space-y-1
                    font-medium
                    px-4
                  "
                >
                  <li class="hover:bg-purple-700 cursor-pointer" v-for="item,index in mapItem.items" :key="index">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- ************************ -->
          
          </div>

        <!-- ---------------------------------------------------------------- -->

        <div class="flex flex-col w-3/4 lg:w-1/4 mx-auto">
          <div class="social-media flex flex-col space-y-12 py-20 pt-0">
            <ul class="flex justify-around items-center">
              <li
                class="
                  h-10
                  w-10
                  p-4
                  rounded-full
                  bg-purple-400
                  hover:bg-purple-600
                  text-white
                  flex
                  justify-center
                  items-center
                "
              >
                <a href="">fb</a>
              </li>
              <li
                class="
                  h-10
                  w-10
                  p-4
                  rounded-full
                  bg-purple-400
                  hover:bg-purple-600
                  text-white
                  flex
                  justify-center
                  items-center
                "
              >
                <a href="">tw</a>
              </li>
              <li
                class="
                  h-10
                  w-10
                  p-4
                  rounded-full
                  bg-purple-400
                  hover:bg-purple-600
                  text-white
                  flex
                  justify-center
                  items-center
                "
              >
                <a href="">ig</a>
              </li>
              <li
                class="
                  h-10
                  w-10
                  p-4
                  rounded-full
                  bg-purple-400
                  hover:bg-purple-600
                  text-white
                  flex
                  justify-center
                  items-center
                "
              >
                <a href="">gg</a>
              </li>
            </ul>
          </div>

        <div class="languages w-full text-center flex justify-center items-center">


            <!-- dropwdown -->
            <div class="dropwdown relative mx-auto" @click="isOpen =!isOpen">
              <span class="overflow-hidden shadow-lg text-white">
                <button class="flew flex justify-between border border-white hover:bg-purple-50 hover:text-purple-900 items-center rounded-md  space-x-4 px-4 py-2  focus:outline-none" type="button" aria-haspopup="true">
                  <span>Langueges</span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                  </span>
                </button>
              </span>
              <!-- dropdown-menu -->
              <div class="dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 rounded-sm" v-if="isOpen">
                  <div class="dropdown-body absolute -left-2 mt-2 origin-top-right bg-white opacity-80  border border-gray-200  rounded-md shadow-xl outline-none">
                    <div class="flex flex-col  items-center justify-center text-purple-700">
                        <p class="w-full hover:bg-white  cursor-pointer px-4 py-1 my-2 hover:bg-purple-socondry transition-all ease-in-out duration-300 transform  hover:py-4" :tabindex="index+1"  v-for="language,index in languages" :key="index" v-text="language.language"></p>
                    </div>
                  </div>
              </div>
              <!-- dropdown-menu -->
            </div>
            <!-- dropwdown -->
          </div>
        </div>
        <!-- ---------------------------------------------------------------- -->
      </div>
    </div>
  </footer>
</template>

<script>
// import Dropdown from "@/components/Dropdown";
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  components: {
    //    Dropdown
  },
  data() {
    return {
      isOpen: false,
      siteMap:[
        {
          title:'COMPANY',
          items:["Team","Histo","Contact us","Location"]
        },
        {
          title:'RESOURCES',
          items:["Resources"," Resources name","Another resources","Final resources"]
        },
        {
          title:'LEGAL',
          items:["Privacy policy","Terms of use"]
        },
        
      ],
      languages:[
        {language:'الداريجة'},{language:'العربية'},{language:'Francais'},{language:'English'},
      ]
    };
  },
  methods: {},
  computed:{
     ...mapGetters({
      isThemDark: "isThemDark",
    }),
  }
};
</script>
<style lang="css" scoped>
.decoration::before {
  content: "";
  width: 100%;
  height: 720px;
  position: absolute;
  left: 0;
  top: -3px;
  background-image: url("/img/footer-deco.svg");
  background-size: 100% auto;
  background-position: 0 0;
  background-repeat: no-repeat;
}
.dark-wave::before {
  background-image: url("/img/footer-deco-dark.svg") !important;
}
</style>
