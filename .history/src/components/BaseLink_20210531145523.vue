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

<script>
export default {
  name: "BaseLink",
  props: {
    type: {
      type: String,
      default: "router-link",
    },
    text: {
      type: String,
      default: null,
      required: false,
    },
    route: {
      type: String,
      default: "index",
      required: false,
    },
  },
};
</script>
