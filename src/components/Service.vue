<template>
  <section id="servics" class="bg-white dark:bg-gray-800">
    <div
      class="
        mx-auto
        flex
        justify-around
        items-center
        w-full
        h-full
        sm:overflow-x-auto
        overflow-x-scroll
      "
    >
      <img
        :src="imgName"
        alt=""
        srcset=""
        class="icons w-16 filter grayscale  transform ease-in-out duration-200"
        v-for="(imgName,index) in imgsName"
        :key="index"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      imgsName: [
        "/img/icone-1.png",
        "/img/icone-2.png",
        "/img/icone-3.png",
        "/img/icone-4.png",
        "/img/icone-5.png",
        "/img/icone-6.png",
      ],
    };
  },
};
</script>
<style lang="css" scoped>
.icons:hover{
  filter: unset;
}
</style>
