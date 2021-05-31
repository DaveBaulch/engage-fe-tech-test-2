<template>
  <div>
    <SpriteIcon name="arrowOutline" class="text-cyan w-97.5 h-27.625" />
    <SpriteIcon
      name="arrow"
      class="w-97.5 h-27.625 z-10"
      fillUrl="#darkLavenderGradient"
    />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";

export default {
  components: {
    SpriteIcon,
  },
  name: "FeatureArrow",
};
</script>
