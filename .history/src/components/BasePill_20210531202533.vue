<template>
<span class="inline-block"></span>
  <span
    class="
      flex flex-row
      justify-center
      bg-mignight
      px-10
      py-6
      rounded-basePill
      debug
    "
  >
    <span class="text-white text-lg font-bold">{{ text }}</span>
    <span class="flex flex-col align-center justify-center ml-2">
      <BaseIcon />
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
