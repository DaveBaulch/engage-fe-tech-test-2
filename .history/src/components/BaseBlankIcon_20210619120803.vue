<template>
  <div>
    <div
      class="w-1.625 h-1.625 rounded-full bg-blankIcon"
      aria-hidden="true"
    ></div>
    <span class="sr-only">No</span>
  </div>
</template>

<script>
export default {
  name: "BaseBlankIcon",
  props: {
    name: {
      type: String,
      required: true,
      validate: (name) => Object.keys(iconMap).includes(name),
    },
    fillUrl: {
      type: String,
      required: false,
      default: null,
    },
    ariaLabel: {
      type: String,
      required: false,
      default: null,
    },
    ariaHidden: {
      type: String,
      required: false,
      default: "true",
    },
  },
};
</script>
