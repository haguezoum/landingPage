<template>
<main>


  <section
    id="container"
    class="bg-gradient-to-br
            from-purple-900
            to-pink-400
            w-full  
            top-0 
            left-0 "
  >
    <div class="relative home flex flex-wrap flex-row">
      <div
          class="
          absolute
          decoration
          w-full
          flex
          justify-between
          z-10
          "
        >
          <div class="left-decoration w-1/6  h-100   ">
          </div>
          <div class="right-decoration w-1/6 h-100    ">
          </div>
          
      </div>
      <div
        class="
          conent-fixed
          z-20
          mx-auto
          flex
          justify-center
          px-20
          items-end
          w-full
          h-screen
        "
      >
        <div class="slider flex w-full mt-50 pb-8">
          <div class="text w-3/4">
            <div class="text-white">
              <h1 class="text-5xl p-6 pl-0 pt-0 mb-6 font-bold leading-relaxed">
                Amazing company deserve amazing software
              </h1>
              <p class="text-3xl  font-semibold w-5/6 leading-relaxed">
                Millions of happy users work better with our integrated Apps.
              </p>
              <div class="my-6 flex justify-between py-4 items-center w-2/5 ">
                <Button text="Watch Video" class="hover:bg-black hover:bg-opacity-30 rounded-full" />
                <Button text="Hello Again" classes="bg-green-500 rounded-full" />
              </div>
            </div>
          </div>
          <div class="img w-2/5 ">
            <img src="../../public/img/desktop.png" class="w-full transform scale-125" />
          </div>
        </div>
      </div>
      <div class="deco-wave h-28 w-full relative pt-6 overflow-hidden">
        <div class="absolute w-full h-full top-0 left-0  z-20 delay-100">
              <img src="../../public/img/deco-wave-light.png" class="w-full h-full object-cover " alt="" srcset="">
        </div>
          <div class="absolute w-full h-full top-0 left-1/2 transform translate-y-8  z-10 animate-wave">
                <img src="../../public/img/deco-wave-light.png" class="w-full h-full object-cover opacity-50" alt="" srcset="">
          </div>
          <div class=" absolute w-full h-full top-0 left-0 transform z-10 translate-y-10  translate-x-32 animate-wave ">
                <img src="../../public/img/deco-wave-light.png" class="w-full h-full object-cover opacity-50" alt="" srcset="">
          </div>
       </div>
     
    </div>
    
  </section>
   <Service/>
   <Statistics/>
   <Feature/>
   <Testimonials/>
  </main>
</template>

<script>
import Button from '@/components/Button'
import Service from '@/components/Service'
import Statistics from '@/components/Statistics'
import Feature from '@/components/Feature'
import Testimonials from '@/components/Testimonial'


export default {
  name: "Container",
  components:{
      Button,
      Service,
      Statistics,
      Feature,
      Testimonials
  }
};
</script>
