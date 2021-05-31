<template>
  <div>
    <SpriteIcon name="dashCircle" class="text-cyan w-2/4 circle" />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";

export default {
  components: {
    SpriteIcon,
    prefersReducedMotion,
  },
  name: "FeatureRoundel",
};
</script>
