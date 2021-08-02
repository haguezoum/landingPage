<template>
  <section id="servics" class="bg-white dark:bg-dark">
    <div
      class="
        servicsContainer
        mx-auto
        w-11/12
        md:w-2/3
        h-full
        flex 
        items-center
        justify-around
        sm:overflow-x-auto
        overflow-x-scroll
      "
    >
      <img
        :src="imgName"
        alt=""
        srcset=""
        class="icons w-16 filter grayscale transform ease-in-out duration-200  mx-9"
        v-for="(imgName, index) in imgsName"
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
.icons:hover {
  filter: unset;
}
.servicsContainer::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(211, 0, 211, 0.3);
	border-radius: 10px;
	background-color: transparent;
}

.servicsContainer::-webkit-scrollbar
{
	width: 5px;
	background-color: transparent;
}

.servicsContainer::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #a300c4;
}
</style>
