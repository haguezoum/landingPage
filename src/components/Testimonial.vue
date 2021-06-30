<template>
  <section id="testimonial" class="lg:mt-20 h-screen w-full">
        <div class="testimonialContant w-full h-full relative flex lg:mt-32 ">       
          <!-- start -->
          <div class=" flex lg:w-3/5 flex-col justify-center space-y-20 relative bg-transparentsm:space-x-0 bg-purple-900 lg:bg-transparent">
                 <div class="hidden lg:block"><img src="/img/wavy.svg" alt="" srcset="" class="absolute left-8 -top-16  w-full h-full object-cover transform scale-150"></div>
                  <h3 class="block mx-auto w-3/5 mt-10  text-center text-2xl sm:text-3xl font-bold text-white z-30">What Our Customers Testimonial</h3>
                  <span class="absolute top-20 left-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 opacity-20 z-10"><svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" viewBox="0 0 20 20" fill="#fff"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" /></svg></span>
                
                  <section class="customer flex flex-col sm:flex-row sm:items-start sm:justify-center md:justify-start p-4   z-30">
                   <div class="customer text-center  sm:w-1/3 sm:mt-5">
                      <div class="w-full ">
                        <span class="rounded-full overflow-hidden h-24 w-24 block mx-auto "> <img src="/img/customer/1.jpg" alt="man 1" srcset=""> </span>
                        </div>
                        <div class="info mt-8 text-white ">
                          <p class="text-xl font-bold">Yassine Abdel</p>
                          <p class="text-lg font-semibold">Front-end developer</p>
                      </div>
                   </div>
                    <div class="mt-12  sm:w-2/3">
                      <p class="text-lg text-white w-full px-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, animi.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, animi.
                      </p>
                    </div>
                  </section>  
          </div>
           <!-- end -->
          <!-- icons start -->
            <div class="icons w-2/5  hidden lg:flex items-center justify-center verflow-hidden  ">
              <div class="grid grid-cols-3 gap-10 grid-rows-3  o">
                <div v-for="(icon, index) in icons" :key="index" class="h-20 w-20" ref="icons">
                  <img
                    :src="icon.iconPath"
                    :alt="icon.title"
                    class="
                      w-full
                      transform
                      ease-in-out
                      duration-700
                      object-cover
                      hover:scale-150
                      hover:rotate-3
                    "
                  />
                </div>
              </div>
            </div>
        </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      icons: [
        { name: "icone 1", iconPath: "/img/icone-1.png", title: "icone totle" },
        { name: "icone 2", iconPath: "/img/icone-2.png", title: "icone totle" },
        { name: "icone 3", iconPath: "/img/icone-3.png", title: "icone totle" },
        { name: "icone 4", iconPath: "/img/icone-4.png", title: "icone totle" },
        { name: "icone 5", iconPath: "/img/icone-6.png", title: "icone totle" },
        { name: "icone 6", iconPath: "/img/icone-5.png", title: "icone totle" },
        { name: "icone 7", iconPath: "/img/icone-6.png", title: "icone totle" },
        { name: "icone 8", iconPath: "/img/icone-1.png", title: "icone totle" },
        { name: "icone 9", iconPath: "/img/icone-2.png", title: "icone totle" },
      ],
    };
  },
  computed:{
    cgangeFilter:function () {
       console.log(this.$refs.icons)
       return true;
     }
  }
};

/*
 
*/
</script>
 