<template>
  <div class="relative" aria-hidden="true">
    <SpriteIcon
      name="dashCircle"
      class="text-cyan absolute top-0 left-0 w-full h-full"
    />
    <div
      class="flex flex-row justify-center items-center"
      style="width: 225px; height: 225px"
    >
      <div
        class="
          rounded-full
          bg-appBlue
          flex flex-row
          justify-center
          items-center
        "
        style="width: 125px; height: 125px"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import prefersReducedMotion from "@/mixins/prefersReducedMotion";
import gsap from "gsap";

export default {
  name: "FeatureRoundel",
components: {
    SpriteIcon,
    prefersReducedMotion,
  },

mixins: [prefersReducedMotion],
  methods: {
    animateCircle() {
      const animationIsOkay = this.prefersReducedMotion();
      if (animationIsOkay) {
        gsap.fromTo(
          ".circle",
          {
            x: 0,
            opacity: 0,
          },
          {
            x: 200,
            opacity: 1,
            duration: 2,
          }
        );
      }
    },  
};
</script>
