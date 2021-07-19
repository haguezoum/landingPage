<template>
  <section id="testimonial" class="pt-5 w-full bg-white dark:bg-dark">
    <div class="testimonialContant w-full h-full flex items-start">
      <!-- start -->
      <div
        class="
          relative
          flex
          w-full
          flex-col
          justify-center
          bg-transparentsm
          z-20
          space-x-0
          bg-purple-900
          dark:bg-dark
          border-t-2 border-b-2
          lg:border-none
          border-transparent border-opacity-50
          dark:border-gray-500
          lg:bg-transparent
        "
      >
        <div
          class="
            hidden
            lg:block
            absolute
            left-0
            w-full
            transform
            scale-x-150 scale-y-125
            -translate-x-3 -translate-y-10
            -rotate-2
          "
        >
          <img src="/img/wavy.svg" alt="" srcset="" class="left-0 top-0" />
        </div>
        <h3
          class="
            block
            mx-auto
            w-full
            mt-10
            text-center text-2xl
            sm:text-3xl
            font-bold
            text-white
            z-30
          "
        >
          What Our Customers Testimonial
        </h3>
        <span
          class="
            absolute
            top-20
            left-5
            sm:left-1/2 sm:transform sm:-translate-x-1/2
            opacity-20
            z-10
          "
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-32 w-32"
            viewBox="0 0 20 20"
            fill="#fff"
          >
            <path
              fill-rule="evenodd"
              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
              clip-rule="evenodd"
            /></svg
        ></span>

        <div class="w-full relative z-30" ref="testimonials">
          <transition
            name="fade"
            enter-active-class="animate__animated animate__flipInY animate__slow"
            leave-active-class="animate__animated animate__flipOutY animate__fast"
          >
            <section
              class="
                customer
                flex
                w-full
                flex-col
                sm:flex-row sm:items-start sm:justify-center
                md:justify-start
                p-4
                z-30
              "
            >
              <div
                class="
                  user
                  text-center
                  sm:w-1/3 sm:mt-5
                  transform
                  ease-in-out
                  delay-500
                "
              >
                <div class="w-full">
                  <span
                    class="
                      rounded-full
                      border-4 border-white
                      dark:border-purple-700
                      overflow-hidden
                      h-24
                      w-24
                      block
                      mx-auto
                    "
                  >
                    <img :src="currentSlider.avatar" alt="man 1" srcset="" />
                  </span>
                </div>
                <div class="info mt-8 text-white">
                  <p class="text-xl font-bold">{{ currentSlider.name }}</p>
                  <p class="text-lg font-semibold">{{ currentSlider.job }}</p>
                </div>
              </div>
              <div class="mt-12 sm:w-2/3 duration">
                <p class="text-lg text-white w-full lg:w-9/12 px-2">
                  {{ currentSlider.content }}
                </p>
              </div>
            </section>
          </transition>
        </div>
      </div>
      <!-- end -->
      <!-- icons start -->
      <div
        class="
          icons
          w-2/5
          hidden
          lg:flex
          items-center
          justify-center
          verflow-hidden
        "
      >
        <div class="p-4 grid grid-cols-3 gap-10 grid-rows-3">
          <div
            v-for="(icon, index) in icons"
            :key="index"
            class="imgContainer h-20 w-20"
            :class="'delay-' + icon.delay"
            ref="icons"
          >
            <img
              :src="icon.iconPath"
              :alt="icon.title"
              class="icon w-full object-cover"
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
        {
          name: "icone 1",
          iconPath: "/img/icone-1.png",
          title: "icone totle",
          delay: 1000,
        },
        {
          name: "icone 2",
          iconPath: "/img/icone-2.png",
          title: "icone totle",
          delay: 2000,
        },
        {
          name: "icone 3",
          iconPath: "/img/icone-3.png",
          title: "icone totle",
          delay: 3000,
        },
        {
          name: "icone 4",
          iconPath: "/img/icone-4.png",
          title: "icone totle",
          delay: 4000,
        },
        {
          name: "icone 5",
          iconPath: "/img/icone-6.png",
          title: "icone totle",
          delay: 5000,
        },
        {
          name: "icone 6",
          iconPath: "/img/icone-5.png",
          title: "icone totle",
          delay: 6000,
        },
        {
          name: "icone 7",
          iconPath: "/img/icone-6.png",
          title: "icone totle",
          delay: 7000,
        },
        {
          name: "icone 8",
          iconPath: "/img/icone-1.png",
          title: "icone totle",
          delay: 8000,
        },
        {
          name: "icone 9",
          iconPath: "/img/icone-2.png",
          title: "icone totle",
          delay: 9000,
        },
      ],
      sliderInfo: [
        {
          avatar: "/img/customer/1.jpg",
          name: "Jack spparow",
          job: "Back-end developer",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, animi.",
        },
        {
          avatar: "/img/customer/2.jpg",
          name: "DevEd",
          job: "fron-end developer",
          content:
            " sit amet consectetur adipisicing elit. Dicta, animi  sit amet consectetur adipisicing elit. Dicta, animi",
        },
        {
          avatar: "/img/customer/3.jpg",
          name: "Axel  shiftman",
          job: "Designer",
          content: " sit amet consectetur adipisicing elit. Dicta, animi",
        },
      ],
      slidIndex: 0,
    };
  },
  setup() {},
  mounted() {
    this.startSlid();
  },
  created() {},
  computed: {
    currentSlider() {
      return this.sliderInfo[Math.abs(this.slidIndex) % this.sliderInfo.length];
    },
  },
  methods: {
    startSlid() {
      setInterval(this.next, 5000);
    },
    next() {
      this.slidIndex <= this.sliderInfo.length
        ? this.slidIndex++
        : this.slidIndex--;
    },
    prev() {
      this.slidIndex >= this.sliderInfo.length
        ? this.slidIndex--
        : this.slidIndex++;
    },
  },
};
</script>
<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  visibility: visible;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

.imgContainer {
  animation: transColor 2s ease-out infinite;
}
.customer {
  animation: testimonialMove 5s ease-in-out 0s infinite;
}

@keyframes transColor {
  from {
    filter: grayscale(0%);
  }
  to {
    filter: grayscale(100%);
  }
}
@keyframes testimonialMove {
  from {
  }
  to {
  }
}
</style>
