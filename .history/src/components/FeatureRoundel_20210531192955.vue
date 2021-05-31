<template>
  <div class="relative" aria-hidden="true">
    <SpriteIcon
      name="dashCircle"
      class="text-cyan absolute top-0 left-0 w-full h-full circle"
    />
    <div class="flex flex-row justify-center items-center w-56 h-56">
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
  },
  mixins: [prefersReducedMotion],
  methods: {
    animateCircle() {
      const animationIsOkay = this.prefersReducedMotion();
      if (animationIsOkay) {
        gsap.to(".circle", {
          rotation: 360,
          duration: 30,
        });
      }
    },
  },
  mounted() {
    this.animateCircle();
  },
};
</script>
