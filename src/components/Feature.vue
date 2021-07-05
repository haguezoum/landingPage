<template>
  <section id="feature" class="feature relative py-32">
    <!--  -->
    <div
      class="left-0 top-0 w-full h-full feature-blogs flex flex-wrap items-center justify-between container mx-auto ">
    <!-- <div class="w-full h-full z-10 transform scale-125">
      <img src="/img/wave-3.svg" alt="" srcset="" class="absolute top-0 w-full h-full obj-ect-cover ">
    </div> -->

      <!-- -------------- first----------------------------- -->
      <div class="item w-full  mb-20 z-20" v-animation>
        <section
          class="flex lg:items-center justify-between flex-col-reverse lg:flex-row ">
           <div class="img w-full lg:w-5/12 p-10 lg:p-0 mb-20 lg:mb-5">
            <figure
              class=" transform overflow-hidden rounded-md shadow-md -translate-x-8 lg:translate-x-16 w-9/12 lg:w-full"
              style="transform: perspective(718px) rotateY(-19deg)"
            >
              <img
                src="/img/app-screen-2.jpg"
                alt=""
                srcset=""
                class="w-full"
              />
            </figure>
          </div>

          <div class="text w-full lg:w-6/12 mb-6 lg:mb-0 text-center lg:text-left">
            <section>
              <strong>
                <p class="title text-3xl pb-9">
                  Act on it-all in one dashboard
                </p>
              </strong>
              <p class="text text-lg lg:text-2xl text-gray-800 py-10">
                Our audience dashboard shows you pre-built segments like top
                locations, recent sources of growth, and even customer lifetime
                value (CLV).
              </p>
            </section>
            <div class="btn">
              <button
                class="  px-6 py-2  text-xl font-semibold rounded-full bg-purple-800 text-white"
              >
                Hello World
              </button>
            </div>
          </div>
        </section>
      </div>
      <!-- ---------seconde------------- -->
      <div class="item w-full  mb-20 lg:my-52  z-20" v-animation>
        <section
          class=" flex lg:items-center justify-between flex-col-reverse lg:flex-row-reverse">
          <div class="img w-full lg:w-5/12 mx-auto md:w-4/5 p-10 lg:p-0 h-full">
            <figure
              class="transform overflow-hidden rounded-md shadow-md left-1/2 -translate-x-1/2 lg:translate-x-16 w-9/12 lg:w-full"
            style="transform: perspective(718px) rotateY(19deg)  translateX(2rem)">
              <img
                src="/img/app-screen-2.jpg"
                alt=""
                srcset=""
                class="w-full"
              />
            </figure>
          </div>

          <div class="text w-full lg:w-6/12 mb-6 lg:mb-0 text-center lg:text-right">
            <section>
              <strong>
                <p class="title text-3xl pb-9">
                  Act on it-all in one dashboard
                </p>
              </strong>
              <p class="text text-lg lg:text-2xl text-gray-800 py-10">
                Our audience dashboard shows you pre-built segments like top
                locations, recent sources of growth, and even customer lifetime
                value (CLV).
              </p>
            </section>
            <div class="btn">
              <button
                class="
                  px-6
                  py-2
                  text-xl
                  font-semibold
                  rounded-full
                  bg-purple-800
                  text-white
                "
              >
                Hello World
              </button>
            </div>
          </div>
        </section>
      </div>
      <!-- ------------last ---------- -->

      <div class="item last w-full  z-20 md:pb-4" v-animation>
        <section class="flex justify-center flex-col-reverse w-full mx-auto">
          <div class="text w-full">
            <section class="">
              <strong class="text-center">
                <p class="title text-3xl">
                  Accelerating to Intelligent Enterprise
                </p>
              </strong>
              <div class="">
                <ul
                  class="
                    flex
                    justify-between
                    items-center
                    my-4
                    w-full
                    lg:w-3/5
                    p-1
                    px-2
                    mx-auto
                  "
                >
                  <span
                    v-for="(tab, index) in tabContent"
                    :key="index"
                    class="flex-1 text-center border-b-2 text-lg lg:text-2xl"
                  >
                    <li
                      class="
                        cursor-pointer
                        py-2
                        px-4
                        border-transparent border-b-4
                        transition-all
                        delay-200
                        ease-in-out
                        hover:bg-purple-500 hover:bg-opacity-20
                      "
                      v-text="tab.title"
                      @click="activeTab = index"
                      :class="
                        activeTab === index
                          ? 'text-purple-600 border-purple-500 border-b-4'
                          : ''
                      "
                    ></li>
                  </span>
                </ul>
                <div class="w-full p-4 text-center mx-auto">
                  <div
                    v-show="activeTab === index"
                    v-for="(tab, index) in tabContent"
                    :key="index"
                    class="transform transition-all ease-in-out duration-150"
                   >
                    <p class=" w-full text-lg lg:text-2xl text-gray-800 py-10">
                      {{ tab.content }}
                    </p>
                    <div class="w-5/6 md:w-3/4 lg:w-3/6  mx-auto pb-24">
                    <transition name="bounce">
                        <figure class=" transform skew-y-12 overflow-hidden rounded-md shadow-md border-2 border-purple-400 top-0 -translate-y-20"
                          style="transform: perspective(718px) rotateX(19deg) translateX(0rem) ;">
                         
                          <img :src="tab.img" class="w-full" />
                       
                        </figure>
                       </transition>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
// import Button from "@/components/Button";
export default {
  name: "Feature",
  components: {
    // Button,
  },
  data() {
    return {
      activeTab: 0,
      tabContent: [
        {
          title: "Lorem",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis aspernatur quasi cumque aliquid voluptas, odit voluptatibus aliquam. Dicta, asperiores.",
          img: "/img/app-screen-1.jpg",
        },
        {
          title: "consectetur",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis aspernatur quasi cumque aliquid voluptas, odit voluptatibus aliquam. Dicta, asperiores.",
          img: "/img/app-screen-2.jpg",
        },
        {
          title: "Officiis",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis aspernatur quasi cumque aliquid voluptas, odit voluptatibus aliquam. Dicta, asperiores.",
          img: "/img/app-screen-3.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
#feature {
}

.bounce.enter-active{
  animation: bounce-in .5;
} 
.bounce.leave-active{
  animation: bounce-in .5 reverse;
} 

@keyframes bounce-in{
  0%{ transform: scale(0);}
  50%{transform: scale(1.5);}
  100%{transform: scale(1);}
}

/*************************************/
.befor-active{
  opacity:0;
  transform: translateX(-100%);
  transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
.active{
  opacity:1;
  transform: translateX(0%);
  transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
.feature::before{
  content: '';
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background-image: url('/img/wave-3.svg');
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  /* transform: scale(1.5); */
  overflow: hidden;
}
</style>
