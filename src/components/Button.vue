<template>
  <button
    class="
      text-white
      font-bold
      px-5
      py-2
      rounded
      flex
      items-center
      relative
    "
    :class="classes"
  >
   
    <span :class="iconBeforClass">{{ iconBefor }}</span>
    <span v-html="svgBefor"   class="text-red-300 absolute left-1/3 transform -translate-x-1/3" :class="svgClassBefore"></span>
    <span class="absolute left-1/2 transform -translate-x-1/2">
      {{ text }}
    </span>
    {{ svgAfter }}
    <span :class="iconAfterClass">{{ iconAfter }}</span>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: [
    "text",
    "classes",
    "svgBefor",
    "svgAfter",
    'svgClassBefore',
    "iconBefor",
    "iconAfter",
    "iconBeforClass",
    "iconAfterClass",
  ],
};
</script>
<style scoped></style>
