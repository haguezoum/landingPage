<template>
  <button
    
    class="text-white font-bold px-5 py-2 rounded"
    :class="classes"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["text", "classes"],
};
</script>
<style scoped></style>
