<template>
  <section
    id="container"
    class="bg-purple-200 w-full h-screen top-0 left-0 "
  >
    <div class="relative home flex flex-wrap flex-row">
        <div
            class="
            absolute
            decoration
            bg-gradient-to-br
            from-purple-900
            to-pink-400
            w-full
            h-screen
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
            <img src="../../public/img/desktop.png" class="w-full" />
          </div>
        </div>
      </div>
      <div class="deco-wave h-40 w-full bg-purple-600 bg-waveRight bg-cover bg-no-repea relative z-20 overflow-hidden">
        <!-- bottom of the page  -->
        <!-- <div class="wave-conetn w-full h-100  bg-red-400"> -->
          <!-- wave as a background img -->
          <!-- <div class="wave-1 absolute bottom-0 left-0 w-full max-h-9"> -->
            <!-- img of moved wave 1  -->
            <!-- <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(241.766, 238.126, 230.079, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,294L80,318.5C160,343,320,392,480,367.5C640,343,800,245,960,179.7C1120,114,1280,82,1440,122.5C1600,163,1760,278,1920,269.5C2080,261,2240,131,2400,73.5C2560,16,2720,33,2880,40.8C3040,49,3200,49,3360,106.2C3520,163,3680,278,3840,343C4000,408,4160,425,4320,424.7C4480,425,4640,408,4800,383.8C4960,359,5120,327,5280,294C5440,261,5600,229,5760,212.3C5920,196,6080,196,6240,220.5C6400,245,6560,294,6720,302.2C6880,310,7040,278,7200,261.3C7360,245,7520,245,7680,228.7C7840,212,8000,180,8160,171.5C8320,163,8480,180,8640,228.7C8800,278,8960,359,9120,383.8C9280,408,9440,376,9600,310.3C9760,245,9920,147,10080,89.8C10240,33,10400,16,10560,16.3C10720,16,10880,33,11040,81.7C11200,131,11360,212,11440,253.2L11520,294L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path></svg> -->
          <!-- </div> -->

          <div class="wave-2 absolute top-0 left-0 w-full max-h-9 z-10">
            <!-- img of moved wave 2  -->
            <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 350" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(237.213, 213.201, 160.123, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,210L60,227.5C120,245,240,280,360,262.5C480,245,600,175,720,128.3C840,82,960,58,1080,87.5C1200,117,1320,198,1440,192.5C1560,187,1680,93,1800,52.5C1920,12,2040,23,2160,29.2C2280,35,2400,35,2520,75.8C2640,117,2760,198,2880,245C3000,292,3120,303,3240,303.3C3360,303,3480,292,3600,274.2C3720,257,3840,233,3960,210C4080,187,4200,163,4320,151.7C4440,140,4560,140,4680,157.5C4800,175,4920,210,5040,215.8C5160,222,5280,198,5400,186.7C5520,175,5640,175,5760,163.3C5880,152,6000,128,6120,122.5C6240,117,6360,128,6480,163.3C6600,198,6720,257,6840,274.2C6960,292,7080,268,7200,221.7C7320,175,7440,105,7560,64.2C7680,23,7800,12,7920,11.7C8040,12,8160,23,8280,58.3C8400,93,8520,152,8580,180.8L8640,210L8640,350L8580,350C8520,350,8400,350,8280,350C8160,350,8040,350,7920,350C7800,350,7680,350,7560,350C7440,350,7320,350,7200,350C7080,350,6960,350,6840,350C6720,350,6600,350,6480,350C6360,350,6240,350,6120,350C6000,350,5880,350,5760,350C5640,350,5520,350,5400,350C5280,350,5160,350,5040,350C4920,350,4800,350,4680,350C4560,350,4440,350,4320,350C4200,350,4080,350,3960,350C3840,350,3720,350,3600,350C3480,350,3360,350,3240,350C3120,350,3000,350,2880,350C2760,350,2640,350,2520,350C2400,350,2280,350,2160,350C2040,350,1920,350,1800,350C1680,350,1560,350,1440,350C1320,350,1200,350,1080,350C960,350,840,350,720,350C600,350,480,350,360,350C240,350,120,350,60,350L0,350Z"></path></svg>
          </div>

        <!-- </div> -->
      </div>
    </div>
  </section>
</template>
<script>
import Button from '@/components/Button'
export default {
  name: "Container",
  components:{
      Button
  }
};
</script>
