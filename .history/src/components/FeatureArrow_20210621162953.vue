<template>
  <div class="debug gsap-arrow relative">
    <SpriteIcon
      name="arrow"
      class="absolute top-0 left-0 z-10 w-full h-full"
      fillUrl="#darkLavenderGradient"
    />
    <SpriteIcon
      name="arrowOutline"
      class="top-4 -left-4 absolute z-10 w-full h-full text-white"
    />
    <SpriteGradient />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import SpriteGradient from "@/components/SpriteGradient";
import prefersReducedMotion from "@/mixins/prefersReducedMotion";
import gsap from "gsap";

export default {
  components: {
    SpriteIcon,
    SpriteGradient,
  },
  name: "FeatureArrow",
  mixins: [prefersReducedMotion],
  methods: {
    animatePills() {
      const animationIsOkay = this.prefersReducedMotion();
      if (animationIsOkay) {
        gsap.fromTo(
          ".gsap-arrow",
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 4,
          }
        );
      }
    },
  },
  mounted() {
    this.animatePills();
  },
};
</script>
