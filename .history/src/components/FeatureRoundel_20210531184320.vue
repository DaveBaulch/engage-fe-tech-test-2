<template>
  <div class="relative" style="width: 225px; height: 225px">
    <SpriteIcon name="dashCircle" class="text-cyan w-full h-full circle" />
    <div class="flex absolute top-0 left-0">
      <div class="rounded bappBlue"></div>
    </div>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";

export default {
  components: {
    SpriteIcon,
  },
  name: "FeatureRoundel",
};
</script>
