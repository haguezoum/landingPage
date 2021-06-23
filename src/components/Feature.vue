<template>
  <section
    id="feature"
    class="py-32 bg-wave bg-cover bg-no-repeat bg-top bg-opacity-50"
  >

    <div class="left-0 top-0 w-full h-full feature-blogs flex flex-wrap items-center justify-between container mx-auto z-20" >
    
    <!-- ------------------------------------------- -->
      <div class="item w-full h-screen  mb-20">

        <section class="flex lg:items-center justify-between flex-col-reverse lg:flex-row ">

          <div class="img w-full  lg:w-5/12  p-10 lg:p-0  mb-20 lg:mb-5">
            <figure class="transform overflow-hidden rounded-md shadow-md -translate-x-8 lg:translate-x-16 w-9/12 lg:w-full " style=" transform: perspective(718px) rotateY(-19deg)">
              <img src="/img/app-screen-2.jpg" alt="" srcset="" class="w-full" />
            </figure>
          </div>

          <div class="text w-full lg:w-6/12 mb-6 lg:mb-0 text-center">
            <section>
              <strong>
                <p class="title text-3xl pb-9">Act on it-all in one dashboard</p>
              </strong>
              <p class="text text-lg lg:text-2xl text-gray-800 py-10 ">
                Our audience dashboard shows you pre-built segments like top
                locations, recent sources of growth, and even customer lifetime
                value (CLV).
              </p>
            </section>
            <div class="btn">
              <button class="px-6 py-2 text-xl font-semibold rounded-full bg-purple-800 text-white">
                Hello World
              </button>
            </div>
          </div>
        </section>

      </div>
      <!-- ---------------------- -->
      <div class="item w-full h-screen  mb-20 lg:mb-5">

        <section class="flex lg:items-center justify-between flex-col-reverse lg:flex-row-reverse  ">

          <div class="img w-full  lg:w-5/12  md:w-4/5 p-10 lg:p-0">
            <figure class="transform overflow-hidden rounded-md shadow-md -translate-x-8 lg:translate-x-16 w-9/12 lg:w-full " style=" transform: perspective(718px) rotateY(-19deg)">
              <img src="/img/app-screen-2.jpg" alt="" srcset="" class="w-full" />
            </figure>
          </div>

          <div class="text w-full lg:w-6/12 mb-6 lg:mb-0 text-center  ">
            <section>
              <strong>
                <p class="title text-3xl pb-9">Act on it-all in one dashboard</p>
              </strong>
              <p class="text text-lg lg:text-2xl text-gray-800 py-10">
                Our audience dashboard shows you pre-built segments like top
                locations, recent sources of growth, and even customer lifetime
                value (CLV).
              </p>
            </section>
            <div class="btn">
              <button class="px-6 py-2 text-xl font-semibold rounded-full bg-purple-800 text-white">
                Hello World
              </button>
            </div>
          </div>
        </section>

      </div>
      <!-- ---------------------- -->
      <div class="item last w-full h-screen">
        <section class="flex justify-center flex-col-reverse w-full mx-auto">
          <div class="img w-1/2 mx-auto">
            <figure
              class="transform skew-y-12 overflow-hidden rounded-md shadow-md"
              style="
                transform: perspective(718px) rotateX(19deg) translateX(0rem);
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

          <div class="text w-full">
            <section class="">
              <strong class="text-center">
                <p class="title text-3xl">
                  Accelerating to Intelligent Enterprise
                </p>
              </strong>
              <div class="border-2 border-red-600">
                <div>
                    <ul class="flex justify-center items-center my-4">
                        <span v-for="(tab,index) in tabContent" :key="index">
                            <li class="cursor-pointer py-2 px-4 border-purple-200 border-b-2 transition-all delay-200 ease-in-out" v-text="tab.title" @click="activeTab = index"
                            :class="activeTab===index ? 'text-purple-600 border-purple-500 border-b-4' : ''"></li>
                        </span>
                    </ul>
                    {{activeTab}}
                      <div class="w-80 bg-white p-16 text-center mx-auto border">
                              <div v-show="activeTab===0">Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).</div>
                              <div v-show="activeTab===1">Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).</div>
                              <div v-show="activeTab===2">Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).</div>
                      </div>
                </div>
              </div>
              <p
                class="
                  text text text-2xl text-gray-800
                  pb-20
                  w-2/3
                  block
                  mx-auto
                  text-center
                  font-semibold
                "
              >
                Our audience dashboard shows you pre-built segments like top
                locations, recent sources of growth, and even customer lifetime
                value (CLV).
              </p>
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
      featureBlogs: [
        {
          title: "Act on it-all in one dashboard",
          text: "Our audience dashboard shows you pre-built segments like top locations, recent sources of growth, and even customer lifetime value (CLV).",
          imgPath: "/img/app-screen-2.jpg",
          btnContent: "see ditail",
        },
        {
          title: "Act on it-all unique value proposition",
          text: "With strong technical foundations, has allowed us to leverage business experts to build hundreds of improvements.",
          imgPath: "/img/app-screen-1.jpg",
          btnContent: "see ditail",
        },
      ],
       activeTab:0,
                tabContent:[
                    {
                        title:'tab 1',
                        content:'',
                        img:''
                    },
                     {
                        title:'tab 2',
                        content:'Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).',
                        img:''
                    },
                     {
                        title:'tab 3',
                        content:'Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).',
                        img:''
                    },
                ]
    };

  },
};
</script>

<style scoped>
#feature {
}
</style>
