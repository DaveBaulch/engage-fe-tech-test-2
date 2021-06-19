<template>
  <div>
    <div
      class="w-1.625 h-1.625 rounded-full bg-blankIcon"
      aria-hidden="true"
    ></div>
    <v-if="ariaText" span class="sr-only">{{ ariaText }}</v-if=>
  </div>
</template>

<script>
export default {
  name: "BaseBlankIcon",
  props: {
    ariaText: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
