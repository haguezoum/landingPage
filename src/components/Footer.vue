<template>
  <footer class="w-full bg-gradient-to-br from-purple-900 to-pink-400 relative">
    <div class="decoration absolute top-0 left-0 w-full">
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
            bg-green-300 bg-opacity-60
            text-lg
            rounded-full
            hover:bg-green-700
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
        <div class="img lg:w-1/4 flex justify-end flex-col items-center mb-2">
          <img src="/img/icone-3.png" alt="" srcset="" class="w-1/2" />
          <p class="text-2xl text-white font-semibold">Hello</p>
        </div>

        <div class="justify-around items-center w-full lg:h-2/4 p-2 lg:px-20">
          <div class="flex flex-col lg:hidden">
            <el-dropdown type="w-full" class="text-white">
              <span class="el-dropdown-link">
                COMPANY<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Team</el-dropdown-item>
                <el-dropdown-item>History</el-dropdown-item>
                <el-dropdown-item>Contact us</el-dropdown-item>
                <el-dropdown-item>Location</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown type="w-full" class="text-white">
              <span class="el-dropdown-link">
                RESOURCES<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Resources</el-dropdown-item>
                <el-dropdown-item>Resources name</el-dropdown-item>
                <el-dropdown-item>Another resources</el-dropdown-item>
                <el-dropdown-item>Final resources</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown type="w-full" class="text-white">
              <span class="el-dropdown-link">
                LEGAL<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Privacy policy</el-dropdown-item>
                <el-dropdown-item>Terms of use</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div
            class="lg:flex w-full justify-around items-center felx-row hidden"
          >
            <div
              class="px-4 text-white"
              v-for="(item, index) in 3"
              :key="index"
            >
              <div class="title w-full text-left px-4 mb-9 text-md font-bold">
                COMPANY
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
                  <li class="hover:bg-purple-700 cursor-pointer">Team</li>
                  <li class="hover:bg-purple-700 cursor-pointer">History</li>
                  <li class="hover:bg-purple-700 cursor-pointer">Contact us</li>
                  <li class="hover:bg-purple-700 cursor-pointer">Location</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- ************************ -->
        </div>

        <!-- ---------------------------------------------------------------- -->

        <div class="flex flex-col w-full lg:w-1/4">
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

        <div class="languages w-full text-center">


            <!-- dropwdown -->
            <div class="dropwdown relative" @click="isOpen =!isOpen">
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
                        <p class="w-full hover:bg-white  cursor-pointer px-4 py-1 my-2  transition-all ease-in-out duration-300 transform hover:scale-150 rounded-md hover:py-4">Arabne</p>
                        <p class="w-full hover:bg-white  cursor-pointer px-4 py-1 my-2  transition-all ease-in-out duration-300 transform hover:scale-150 rounded-md hover:py-4">Francais</p>
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

export default {
  name: "Footer",
  components: {
    //    Dropdown
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {},
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
  background-image: url(/img/footer-deco.svg);
  background-size: 100% auto;
  background-position: 0 0;
  background-repeat: no-repeat;
}
</style>
