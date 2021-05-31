<template>
  <router-link
    v-if="type === 'router-link'"
    :to="to"
    class="inline-block"
  >
    <span
      class="
        flex 
        flex-row
        content-center
        justify-center
        bg-midnight
        px-6
        py-10
        rounded-
      "
    >
      <span class="text-white">{{ text }}</span>
      <SpriteIcon name="chevronRight" class="text-lightLavender-light w-1.5" />
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
  components: {
    SpriteIcon,
  },
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
