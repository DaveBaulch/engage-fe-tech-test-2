<template>
  <span class="inline-block">
    <span
      class="
        flex flex-row
        justify-left
        bg-white bg-opacity-95
        w-full
        sm:w-21.25
        px-5.5
        py-4.125
        rounded-basePill
        md:shadow-2xl
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
