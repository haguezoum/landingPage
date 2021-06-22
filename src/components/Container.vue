<template>
  <main>
    <section
      id="container"
      class="bg-gradient-to-br from-purple-900 to-pink-400 w-full "
    >
      <div class="relative home flex flex-wrap flex-row">
        
        <!-- start fixed asaid decoration -->
        <div class="absolute decoration w-full flex justify-between z-10">
          <div class="left-decoration w-1/6 h-100"></div>
          <div class="right-decoration w-1/6 h-100"></div>
        </div>
        <!-- end fixed asaid decoration -->

        <!-- start content -->
        <div class="conent-fixed z-20  w-full lg:h-screen mt-20">
          <div class="slider  w-full mt-16  flex justify-center items-center">

            <!--end text -->
            <div class="text w-full lg:w-3/5">
              <div class="text-white flex justify-center text-center lg:text-left flex-col p-4 lg:pl-10">

                <h1 class="text-3xl md:text-4xl  lg:text-5xl mb-6 mx-8 lg:mx-0 font-bold leading-relaxed">
                  Amazing company deserve amazing software
                </h1>
                <p class="text-xl md:text-2xl lg:text-3xl font-semibold m-1 lg:w-5/6 my-6  md:my-20 lg:my-12  leading-loose">
                  Millions of happy users work better with our integrated Apps.
                </p>

                <div class="flex md:justify-start items-center  flex-col-reverse sm:flex-row  lg:py-0w-full md:w-3/5  space-x-2 px-8 lg:px-0">
                
                 <div class="w-full ">
                    <button class="hover:bg-white hover:bg-opacity-10 rounded-full md:w-full sm:w-3/4 uppercase py-3 px-5 sm:px-0 mx-auto text-whit font-bold  lg:px-0">
                        Watch Video 
                    </button>
                 </div>
                  <div class="w-full ">
                     <button class="bg-green-500 rounded-full hover:bg-green-600 md:w-full sm:w-3/4 uppercase py-3 px-5 sm:px-0 text-whit font-bold  lg:px-0 mb-8 sm:mb-0 mx-auto">
                        Get started 
                    </button>
                  </div>
                </div>

              </div>
            </div>
            <!--end text -->

            <!--start img -->
            <div class="img w-2/5 hidden lg:block">
              <img
                src="../../public/img/desktop.png"
                class="w-full transform"
              />
            <!-- end img -->

            </div>
          </div>
        </div>
        <!-- end content -->

        <!-- start wave decoration -->
        <div class="deco-wave h-28 w-full relative pt-6 overflow-hidden">
          <div class="absolute w-full h-full top-0 left-0 z-20 delay-100">
            <img
              src="../../public/img/deco-wave-light.png"
              class="w-full h-full object-cover"
              alt=""
              srcset=""
            />
          </div>
          <div
            class="
              absolute
              w-full
              h-full
              top-0
              left-1/2
              transform
              translate-y-8
              z-10
              animate-wave
            "
          >
            <img
              src="../../public/img/deco-wave-light.png"
              class="w-full h-full object-cover opacity-50"
              alt=""
              srcset=""
            />
          </div>
          <div
            class="
              absolute
              w-full
              h-full
              top-0
              left-0
              transform
              z-10
              translate-y-10 translate-x-32
              animate-wave
            "
          >
            <img
              src="../../public/img/deco-wave-light.png"
              class="w-full h-full object-cover opacity-50"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <!-- end wave decoration -->

      </div>
    </section>
    <Service />
    <Statistics />
    <Feature />
    <Testimonials />
  </main>
</template>

<script>
// import Button from "@/components/Button";
import Service from "@/components/Service";
import Statistics from "@/components/Statistics";
import Feature from "@/components/Feature";
import Testimonials from "@/components/Testimonial";

export default {
  name: "Container",
  components: {
    // Button,
    Service,
    Statistics,
    Feature,
    Testimonials,
  },
  data() {
    return {
      Svgpath: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>`,
    };
  },
};
</script>
