<template>
  <div>
    <span
      class="flex flex-row justify-center bg-white px-10 py-6 rounded-baseLink"
    >
      <span class="text-white text-lg font-bold">{{ text }}</span>
      <span class="flex flex-col align-center justify-center ml-2">
        <BaseIcon />
      </span>
    </span>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";

export default {
  name: "BasePill",
  components: {
    BaseIcon,
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
