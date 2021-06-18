<template>
  <div
    class="
      relative
      rounded-full
      bg-gradient-to-b
      from-lightLavender-light
      to-lightLavender-dark
      w-1.625
      h-1.625
    "
  >
    <SpriteIcon
      name="check"
      class="text-white w-5 h-5 absolute top-0 right-0"
    />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";

export default {
  name: "BaseTickIcon",
  components: {
    SpriteIcon,
  },
};
</script>
