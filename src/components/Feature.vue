<template>
  <section id="feature" class="feature relative py-8 bg-white dark:bg-dark" :dir="$t('dir')">
    <!--  -->
    <div
      class="
        left-0
        top-0
        w-full
        h-full
        feature-blogs
        flex flex-wrap
        items-center
        justify-between
        container
        mx-auto
      "
    >
      <!-- -------------- first----------------------------- -->
      <div class="item w-full z-20 " v-animation>
        <section
          class="
            flex
            lg:items-center
            justify-between
            flex-col-reverse
            lg:flex-row
          "
        >
          <div class="img w-full lg:w-4/12 p-10 lg:p-0 mb-14 lg:mb-5 ">
            <figure
              class="
                transform
                overflow-hidden
                rounded-md
                shadow-md
                w-9/12
                lg:w-full
                mx-auto
                lg:mx-0
                left-rotat
              "
            >
              <img
                src="/img/app-screen-2.jpg"
                alt=""
                srcset=""
                class="w-full"
              />
            </figure>
          </div>

          <div
            class="text w-full lg:w-6/12 mb-6 lg:mb-0 text-center "
            :class="$t('dir')==='rtl'?'lg:text-right':'lg:text-left'"

          >
            <section>
              <strong>
                <p class="title first relative w-max  mx-auto lg:mx-4 text-2xl md:text-3xl pb-9 text-purple-primary dark:text-purple" :class="$t('dir')">
                  {{$t('features.firstFeatur.title')}}
                </p>
              </strong>
              <p
                class="
                  text text-lg
                  lg:text-2xl
                  text-gray-800
                  py-10
                  dark:text-gray-300
                  px-4
                  lg:px-0
                "
              >
                 {{$t('features.firstFeatur.content')}}
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
                  bg-purple
                  hover:bg-purple-primary
                  text-white
                "
              >
                Hello World
              </button>
            </div>
          </div>
        </section>
      </div>
      <!-- ---------seconde------------- -->
      <div class="item w-full  my-8 lg:my-32 z-20 " v-animation>
        <section
          class="
            flex
            lg:items-center
            justify-between
            flex-col-reverse
            lg:flex-row-reverse
          "
        >
          <div class="img w-full lg:w-4/12 p-10 lg:p-0 mb-14 lg:mb-5">
            <figure
              class="
                transform
                overflow-hidden
                rounded-md
                shadow-md
                w-9/12
                lg:w-full
                 mx-auto
                lg:mx-0
                right-rotat
              "
            >
              <img
                src="/img/app-screen-2.jpg"
                alt=""
                srcset=""
                class="w-full"
              />
            </figure>
          </div>

          <div
            class="text w-full lg:w-6/12 mb-6 lg:mb-0 text-center "
            :class="$t('dir')==='rtl'?'lg:text-left':'lg:text-right'"
          >
            <section>
              <strong>
                <p class="title second relative w-max left-0 mx-auto lg:mx-4 text-2xl md:text-3xl pb-9 text-purple-primary dark:text-purple" :class="$t('dir')">
                  {{$t('features.secondFeatur.title')}}
                </p>
              </strong>
              <p
                class="
                  text-lg
                  lg:text-2xl
                  text-gray-800
                  py-10
                  dark:text-gray-300
                  px-4
                  lg:px-0
                "
              >
                {{$t('features.secondFeatur.content')}}
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
                  bg-purple
                  hover:bg-purple-primary
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

      <div class="item last w-full z-30" v-animation>
        <section class="flex justify-center flex-col-reverse w-full mx-auto">
          <div class="text w-full">
            <section class="">
              <strong class="text-center">
                <p class="title last relative text-2xl lg:text-3xl text-purple-primary dark:text-purple pb-8">
                  {{$t('features.lastFeatur.title')}}
                </p>
              </strong>
              <div class="">
                <ul
                  class="flex justify-between  items-center my-4 w-full lg:w-3/5 p-1 px-2 mx-auto"
                >
                  <span
                    v-for="(tab, index) in $t('features.lastFeatur.tabContent')"

                    :key="index"
                    class="w-full text-center border-b-2 text-lg lg:text-2xl"
                  >
                    <li class=" cursor-pointer py-2 px-4 border-transparent border-b-4 transition-all delay-200 ease-in-out hover:bg-purple-500 hover:bg-opacity-20"
                      v-text="tab.title"
                      @click="activeTab = index"
                      :class="
                        activeTab === index
                          ? 'text-purple border-purple-500 border-b-4 transition-all ease-in-out'
                          : 'dark:text-gray-300'
                      "
                    ></li>
                  </span>
                </ul>

                <div class="w-full p-4 text-center mx-auto">
                  <div
                    v-show="activeTab === index"
                    v-for="(tab, index) in $t('features.lastFeatur.tabContent')"
                    :key="index"
                    class="transform transition-all ease-in-out duration-150"
                  >
                    <p class=" w-full text-lg lg:text-2xl text-gray-800 dark:text-gray-300 py-10 px-4 lg:px-0" >
                      {{ tab.content }}
                    </p>
                    <div class="w-5/6 md:w-3/4 lg:w-3/6 mx-auto pb-16">
                      <transition name="bounce">
                        <figure
                          class=" transform skew-y-12 overflow-hidden rounded-md shadow-md border-2 border-purple-400 top-0 -translate-y-20 "
                          style="
                            transform: perspective(718px) rotateX(19deg)
                              translateX(0rem);
                          "
                        >
                          <img :src="img.imgSrc" class="w-full" v-show="index === activeTab" v-for="img,index in fuatersImgs " :key="index" />
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
      fuatersImgs: [
        {
         imgSrc: "/img/app-screen-1.jpg",
        },
        {
         imgSrc: "/img/app-screen-2.jpg",
        },
        {
         imgSrc: "/img/app-screen-3.jpg",
        },
      ],
    };
  },
  computed: {
   
  },
};
</script>

<style scoped>
.befor-active {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
.active {
  opacity: 1;
  transform: translateX(0%);
  transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
.feature::before {
  content: "";
  position: absolute;
  /* border:1px solid #000; */
  left: 0%;
  top: -5%;
  width: 100%;
  height: 100%;
  background-image: url("/img/wave-3.svg");
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  /* transform: scale(1.5); */
  overflow: hidden;
}
.title::after{
  content: "";
  position: absolute;
  width: 20%;
  height: 12px;
  background-color: purple;
  bottom: 0%;
  border-radius: 15px;
}
.title.first::after{
  left: 50%;
  transform: translateX(-50%);
}
.title.first.rtl::after{
  right: 0%;
}
.title.second::after{
  right: 50%;
  transform: translateX(50%);

}
.title.second.rtl::after{
  right: 0%;
}
.title.last::after{
  left: 50%;
  transform: translateX(-50%);
}
.left-rotat{
    transform: perspective(0rem) rotateY(0deg) translateX(0%) !important; 
}
.right-rotat{
    transform: perspective(0rem) rotateY(0deg) translateX(0%) !important;
}
@screen sm {
  
}
@screen lg {
  .title.first::after{
   left: 0%;
   transform: translateX(0%);
  } 
  .title.second::after{
   right: 0%;
   transform: translateX(0%);
  } 
  .title.second.rtl::after{
  right: 0%;
  }
  .title.first.rtl::after{
    left: 0%;
  }
  .left-rotat{
    transform: perspective(5rem) rotateY(3deg) translateX(10%) !important; 
}
.right-rotat{
    transform: perspective(5rem) rotateY(-3deg) translateX(-10%) !important;
}
} 

</style>
