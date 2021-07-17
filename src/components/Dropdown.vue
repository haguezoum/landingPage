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
        :class="[!article.isOpen ? 'py-5'+classes.header : 'dark:bg-green bg-green dark:border-gray-800'+classes.header]"
        class="bg-green"
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
            "bg-green dark:bg-gray-800 bg-opacity-90 text-white  w-full p-4 focus:outline-none flex justify-between items-center",
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
