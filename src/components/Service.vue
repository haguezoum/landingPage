<template>
  <section id="servics" class="h-40">
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
        class="w-16 filter grayscale hover:filter-none hover:border"
        v-for="imgName in imgsName"
        :key="imgName"
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
