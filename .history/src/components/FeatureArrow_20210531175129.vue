<template>
  <div>
    <SpriteIcon
      name="arrowOutline"
      class="text-cyan w-2/4"
      ariaLabel="arrow"
      ariaHidden="false"
    />
    <SpriteIcon
      name="arrow"
      class="w-97.5 h-27.625"
      fillUrl="#darkLavenderGradient"
    />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";

export default {
  name: "FeatureArrow",
};
</script>
