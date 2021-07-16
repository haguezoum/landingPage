<template>
  <div class="content p-4 px-7 w-full flex flex-col">
    <article
      class="
        rounded-xl
        overflow-hidden
        text-xl
        bg-white
        shadow-lg
        mb-10
        transition-all
        ease-in-out
        transform
        duration-1000
        delay-100
      "
      v-for="(article, index) in data"
      :key="index"
    >
      <button
        :class="[!article.isOpen ? 'py-5' : '', classes.header]"
        class=""
        @click="SayHello(article)"
      >
        <span
          :class="
            article.isOpen
              ? 'transform duration-1000 delay-100 rotate-180 '
              : 'transform duration-1000 delay-100 rotate-0'
          "
          v-if="classes.icon"
          v-html="classes.icon"
        >
        </span>
        <p>{{ article.title }}</p>

        <span
          :class="
            article.isOpen
              ? 'transform duration-1000 delay-100 rotate-180 '
              : 'transform duration-1000 delay-100 rotate-0'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        class="
          lorem
          transition-all
          ease-in-out
          delay-300
          transform
          duration-1000
          dark:bg-gray-700 dark:text-gray-200
        "
        :class="article.isOpen ? 'h-auto' : 'h-0'"
      >
        <p class="p-4">{{ article.text }}</p>
      </div>
    </article>
  <!-- ------------------------------------------------------------- -->

  <!-- 
      =======================================================================
      Name    :   Pure CSS Dropdown Menu
      Author  :   Surjith S M
      Twitter :   @surjithctly

      Get more components here 👉 https://web3templates.com/components

      Copyright © 2021
      =======================================================================
  -->


  <!-- <div class=" relative inline-block text-left dropdown">
    <span class="rounded-md shadow-sm">
      <button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <span>Options</span>
        <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </span>

    <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
      <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
        <div class="px-4 py-3">         
          <p class="text-sm leading-5">Signed in as</p>
          <p class="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
        </div>
        <div class="py-1">
          <a href="javascript:void(0)" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Account settings</a>
          <a href="javascript:void(0)" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Support</a>
          <span role="menuitem" tabindex="-1" class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">New feature (soon)</span>
          <a href="javascript:void(0)" tabindex="2" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >License</a></div>
        <div class="py-1">
          <a href="javascript:void(0)" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Sign out</a></div>
      </div>
    </div>
  </div> -->
</div>
<!-- <style>
.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
}
    </style> -->




</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {};
  },
  props: {
    data: Array,
    classes: {
      type: Object,

      default: function () {
        return {
          header:
            "bg-green-500 dark:bg-purple-900 bg-opacity-90 text-white  w-full p-4 focus:outline-none flex justify-between items-center",
        };
      },
    },
  },
  computed: {},
  methods: {
    SayHello(article) {
      this.$emit("openden", article);
    },
  },
};
</script>

<style></style>
