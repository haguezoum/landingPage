<template>
  <header class="lg:px-2 top-0 left-0 w-full fixed z-50">
    <div
      class="
        header-area
        flex
        w-full
        h-full
        justify-between
        my-auto
        mx-auto
       
      ">
      <!--left-->
      <div class="logo nav-links w-1/2 sm:w-2/5 lg:w-3/5 flex  items-center ">
       
        <div class="flex space-x-4 justify-start items-center lg:w-1/5 ">
          <div class="lg:hidden relative w-1/3 ">
            <nav x-data="{ open: false }">
              <button
                class="text-white w-10 h-10 relative focus:outline-none"
                @click="open = !open"
              >
                <span class="sr-only">Open menu</span>
                <div
                  class="
                    block
                    w-5
                    absolute
                    left-1/2
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
                      h-1
                      w-7
                      rounded-full
                      bg-current
                      transform
                      transition
                      duration-500
                      ease-in-out
                    "
                    :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
                  ></span>
                  <span
                    aria-hidden="true"
                    class="
                      block
                      absolute
                      h-1
                      w-7
                      rounded-full
                      bg-current
                      transform
                      transition
                      duration-500
                      ease-in-out
                    "
                    :class="{ 'opacity-0': open }"
                  ></span>
                  <span
                    aria-hidden="true"
                    class="
                      block
                      absolute
                      h-1
                      w-7
                      rounded-full
                      bg-current
                      transform
                      transition
                      duration-500
                      ease-in-out
                    "
                    :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
                  ></span>
                </div>
              </button>
            </nav>
          </div>

          <div class="logo-img p-4 md:p-0 w-2/3 ">
              <img
                src="/img/logo.png"
                alt=""
                srcset=""
                class="w-2/5 md:w-2/6 lg:w-2/5 xl:w-1/5 mx-auto"
                style="width:50px"

              />
          </div>
        </div>
        <!-- nav links -->
        <div class="nav-links hidden lg:flex">
          <ul
            class="
              flex
              w-3/4
              justify-between
              space-x-4
              font-bold
              text-md text-white
            "
          >
            <li
              v-for="(navLink, index) in navLinks"
              :key="index"
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
                hover:opacity-40 hover:bg-purple-900
                bg-opacity-30
              "
            >
              {{ navLink.name }}
            </li>
          </ul>
        </div>

      </div>

<!-- ---------------------------------------------------------------- -->
      <!--right-->
      <div class="menu w-1/2  sm:w-3/5 lg:w-2/5  my-auto">
        <div class="flex justify-end md:justify-between items-center">
          <div
            class="hidden btn-area p-4 sm:flex justify-end space-x-4 w-3/4 uperrcase text-md md:text-xl">
            <div>
              <button class="bg-transparent rounded-full hover:bg-white hover:bg-opacity-10 text-white  px-8 font-semibold py-2">Log in</button>
              </div>
            <div>
              <button class="bg-transparent rounded-full  bg-green-300 hover:bg-green-400 text-white  px-8 font-semibold py-2">Log in</button>
            </div>
          </div>
          <div class="setting-btn w-1/5 flex justify-start items-center">
            <span class="">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="#fff">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            </span>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
// import Button from "@/components/Button";
export default {
  name: "Header",
  components: {
    // Button,
  },
  data() {
    return {
      open: false,
      navLinks: [
        {
          name: "Feature",
        },
        {
          name: "Testimonials",
        },
        {
          name: "Pricing",
        },
        {
          name: "FAQ",
        },
        {
          name: "Contact",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
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
