<template>
  <router-link v-if="type === router - link" :to="to" class="">
    <slot></slot>
  </router-link>
  <a v-else-if="type === link" :href="to" class="">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    type: {
      type: String,
      default: "router-link",
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
