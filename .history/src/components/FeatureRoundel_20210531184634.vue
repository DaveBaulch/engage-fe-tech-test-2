<template>
  <div class="relative" class="" style="width: 225px; height: 225px">
    <SpriteIcon name="dashCircle" class="text-cyan w-full h-full circle" />
    <div
      class="flex align-center justify-items-center top-0 left-0 w-full h-full"
    >
      <div class="rounded bg-appBlue" style="width: 125px; height: 125px"></div>
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
