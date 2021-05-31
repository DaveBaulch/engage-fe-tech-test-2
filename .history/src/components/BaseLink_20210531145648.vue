<template>
  <router-link v-if="type === 'router-link'" :to="to" class="">
    <span class="flex">
      <slot></slot>
    </span>
  </router-link>
  <a v-else-if="type === 'link'" :href="to" class="">
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
