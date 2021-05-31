<template>
  <div class="relative">
    <SpriteIcon
      name="dashCircle"
      class="text-cyan absolute top-0 left-0 w-full h-full"
    />
    <div class="flex flex-row items-center" style="width: 225px; height: 225px">
      <div
        class="rounded-full bg-appBlue m-auto"
        style="width: 125px; height: 125px"
      >
        <div class="flex place-items-center">
          <slot></slot>
        </div>
      </div>
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
