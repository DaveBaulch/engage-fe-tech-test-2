<template>
  <router-link
    v-if="type === 'router-link'"
    :to="to"
    class="inline-block debug"
  >
    <span class="flex">
      {{ text }}
      <SpriteIcon name="chevronRight" class="text-lightLavender-light" />
    </span>
  </router-link>
  <a v-else-if="type === 'link'" :href="to" class="">
    {{ text }}
  </a>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";

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
    text: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
