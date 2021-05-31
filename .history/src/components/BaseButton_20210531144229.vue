<template>
  <router-link
    :to="{ name: route }"
    class="p-3"
  >
    <slot>
    </slot>
  </router-link>
</template>

<script>


export default {
  name: "BaseButton",
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
