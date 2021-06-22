<template>
  <section id="testimonial">
    <div class="flex justify-between items-start">
      <div class="testimonials flex-1 relative">
        <div
          class="
            bg-shape
            absolute
            -top-3/4
            left-0
            transform
            scale-150
            -rotate-12
            z-10
          "
        >
          <!--?xml version="1.0" standalone="no"?-->
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stop-color="rgba(100.628, 55, 248, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stop-color="rgba(251, 31, 187.965, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M17.2,-30.5C23.3,-26.3,29.9,-23.7,34.4,-18.9C38.9,-14.1,41.2,-7,41.6,0.2C42,7.5,40.4,15,37,21.6C33.5,28.2,28.2,33.9,21.8,38.1C15.3,42.2,7.6,44.7,-0.3,45.2C-8.1,45.6,-16.3,44,-22.7,39.8C-29.2,35.7,-33.9,29,-36.1,21.9C-38.3,14.9,-37.9,7.4,-36.5,0.9C-35,-5.7,-32.4,-11.5,-30.2,-18.5C-27.9,-25.5,-26.1,-33.7,-21.1,-38.6C-16.2,-43.4,-8.1,-44.8,-1.3,-42.6C5.6,-40.4,11.1,-34.6,17.2,-30.5Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              stroke-width="0"
              style="transition: all 0.3s ease 0s"
            ></path>
          </svg>
        </div>
        <div
          class="
            conent
            z-20
            absolute
            top-1/2
            bg-red-300
            left-1/2
            transform
            -translate-x-1/2
          "
        >
          <h1 class="text-white text-4xl font-semibold">
            What our Customers testimonial
          </h1>
          <div>
            <div class="customer">
              <div class="">
                <img src="" alt="" srcset="" />
              </div>
              <div>
                <p>Hasan Aguezoum</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- icons start -->
      <div class="icons flex-1 flex items-center justify-center">
        <div class="grid grid-cols-3 gap-10 grid-rows-3">
          <div v-for="(icon, index) in icons" :key="index" class="h-24 w-24">
            <img
              :src="icon.iconPath"
              :alt="icon.title"
              class="
                w-full
                transform
                ease-in-out
                duration-700
                object-cover
                hover:scale-150 hover:rotate-3
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
};
</script>
