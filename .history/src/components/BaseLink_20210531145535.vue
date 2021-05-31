<template><div>dsadsads</div></template>

<script>
export default {
  name: "BaseLink",
  props: {
    type: {
      type: String,
      default: "router-link",
      required: false,
    },
    to: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
