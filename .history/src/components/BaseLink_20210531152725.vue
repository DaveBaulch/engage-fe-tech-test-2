<template>
  <router-link v-if="type === 'router-link'" :to="to" class="inline-block">
    <span
      class="flex flex-row justify-center bg-midnight px-10 py-6 rounded-2xl"
    >
      <span class="text-white text-lg font-bold">{{ text }}</span>
      <span class="flex flex-col align-center justify-center ml-2">
        <SpriteIcon
          name="chevronRight"
          class="text-lightLavender-light w-1.5 h-3"
        />
      </span>
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
