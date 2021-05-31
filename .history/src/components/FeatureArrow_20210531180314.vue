<template>
  <div class="relative w-97.5 h-27.625 debug">
    <SpriteIcon
      name="arrow"
      class="w-97.5 h-27.625 z-10 absolute top-0 left-0"
      fillUrl="#darkLavenderGradient"
    />
    <SpriteIcon
      name="arrowOutline"
      class="text-white w-97.5 h-27.625 z-10 absolute -top-2 -left-1"
    />
    <SpriteGradient />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import SpriteGradient from "@/components/SpriteGradient";

export default {
  components: {
    SpriteIcon,
    SpriteGradient,
  },
  name: "FeatureArrow",
};
</script>
