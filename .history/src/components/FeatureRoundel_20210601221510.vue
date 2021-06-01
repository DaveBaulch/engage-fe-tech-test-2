<template>
  <div class="relative">
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
          w-32
          h-32
          shadow-2xl
        "
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
        gsap.fromTo(
          ".circle",
          { rotation: 0 },
          {
            rotation: 360,
            duration: 10,
            transformOrigin: "center",
            repeat: -1,
            ease: "none",
          }
        );
      }
    },
  },

  mounted() {
    this.animateCircle();
  },
};
</script>
