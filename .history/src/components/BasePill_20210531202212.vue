<template>
  <div>
    <span
      class="
        flex flex-row
        justify-center
        bg-midnight
        px-10
        py-6
        rounded-baseLink
      "
    >
      <span class="text-white text-lg font-bold">{{ text }}</span>
      <span class="flex flex-col align-center justify-center ml-2">
        <SpriteIcon
          name="chevronRight"
          class="text-lightLavender-light w-1.5 h-3"
        />
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
};
</script>
