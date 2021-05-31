<template>
  <div class="relative" aria-hidden="true">
    <SpriteIcon
      name="dashCircle"
      class="text-cyan absolute top-0 left-0 w-full h-full circle"
    />
    <div
      class="
        flex flex-row
        justify-center
        items-center
        w-40
        h-40
        xl:w-56
        xl:h-56
      "
    >
      <div
        class="
          rounded-full
          bg-appBlue
          flex flex-row
          justify-center
          items-center
          w-20
          h-20
          xl:w-32
          xl:h-32
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
           3, {rotation:"360", ease:Linear.easeNone, repeat:-1}

      }
    
  mounted() {
    this.animateCircle();
  },
};
</script>
