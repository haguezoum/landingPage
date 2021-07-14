<template>
  <section id="FAQ" class="w-full lg:px-20 bg-white dark:bg-gray-800">
    <div class="w-full h-full flex items-center flex-col justify-center">
      <!-- strt content -->
      <div
        class="
          w-full
          flex flex-col
          lg:flex-row lg:justify-between lg:items-start
        "
      >
        <div class="w-full mx-auto text-center p-6 mb-10">
          <div class="heading">
            <div class="title text-3xl font-bold mb-16 lg:text-center">
              <h3 class="titleSection relative dark:text-gray-200">
                FAQ <span class="font-mono"> & </span> Plan
              </h3>
            </div>
            <div class="text-2xl font-normal text-gray-700 lg:text-left">
              <p class="subtitle dark:text-gray-200">
                Have a question? Check out our frequently asked questions to
                find your answer.
              </p>
            </div>
          </div>
          <div class="w-full hidden lg:block mt-6">
            <div class="flex justify-start items-center">
              <img src="/img/FAQ2.svg" alt="faq" srcset="" class="w-3/4" />
            </div>
          </div>
        </div>
        <Dropdown :data="articles" @openden="isOpen" />
      </div>
      <!--end first part content-->

      <!-- start carusol -->

      <!-- end carusol -->
    </div>
  </section>
</template>
<script>
import Dropdown from "@/components/Dropdown";
export default {
  name: "FAQ",
  components: {
    Dropdown,
  },
  data() {
    return {
      show: false,
      articles: [
        {
          id: 0,
          title: "Pellentesque ac bibendum tortor?",
          text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
          isOpen: false,
        },
        {
          id: 1,
          title: "Pellentesque ac bibendum tortor?",
          text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
          isOpen: true,
        },
        {
          id: 2,
          title: "Pellentesque ac bibendum tortor?",
          text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
          isOpen: false,
        },
        {
          id: 3,
          title: "Pellentesque ac bibendum tortor?",
          text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
          isOpen: false,
        },
      ],
      classes: {
        header: "",
        body: "",
        footer: "",
        icon: ``,
      },
    };
  },
  methods: {
    async isOpen(article) {
      if (!article.isOpen) {
        await this.closeAllDropdown();
        article.isOpen = true;
      } else {
        article.isOpen = false;
      }
    },
    closeAllDropdown() {
      this.articles.forEach((el) => (el.isOpen = false));
    },
  },

  computed: {},
};
</script>

<style lang="css" scoped>
.titleSection::after {
  content: "";
  position: absolute;
  width: 20%;
  height: 12px;
  background-color: purple;
  left: 50%;
  transform: translate(-50%);
  bottom: -30px;
  border-radius: 15px;
}

/* ********************************************** */
.active {
  @apply bg-pink-600;
}
.hola {
  background-color: tomato;
}
</style>
