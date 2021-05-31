<template>
  <span class="inline-block">
    <span
      class="
        flex flex-row
        justify-left
        bg-midnight
        w21.25
        px-5.5
        py-5
        rounded-basePill
        debug
      "
    >
      <span class="flex flex-col align-center justify-center mr-4">
        <BaseIcon />
      </span>
      <span class="text-white text-lg font-bold">{{ text }}</span>
    </span>
  </span>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";

export default {
  name: "BasePill",
  components: {
    BaseIcon,
  },
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
