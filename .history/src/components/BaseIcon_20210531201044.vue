<template>
  <div class="rounded-full bg-appBlue relative w-20 h-20 xl:w-32 xl:h-32">
    <SpriteIcon name="check" class="text-white" />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";

export default {
  name: "BaseIcon",
  components: {
    SpriteIcon,
  },
};
</script>
