<template>
  <span class="inline-block">
    <span
      class="
        flex flex-row
        justify-left
        bg-white
        w-21.25
        px-5.5
        py-4
        rounded-basePill
      "
    >
      <span class="flex flex-col align-center justify-center mr-4">
        <BaseIcon />
      </span>
      <span class="text-midnight text-lg font-bold">{{ text }}</span>
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
