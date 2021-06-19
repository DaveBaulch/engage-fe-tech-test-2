<template>
  <div class="relative w-97.5 h-27.625 debug">
    <SpriteIcon
      name="arrow"
      class="w-97.5 h-27.625 z-10 absolute top-0 left-0"
      fillUrl="#darkLavenderGradient"
    />
    <SpriteIcon
      name="arrowOutline"
      class="text-white w-97.5 h-27.625 z-10 absolute top-4 -left-4"
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
        gsap
          .fromTo(
            "li:nth-child(odd) .pill",
            {
              x: -40,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 0.95,
              duration: 1,
              stagger: {
                each: 1,
              },
            }
          )
          .delay(0.5);
        )
      }
    },
  },
  mounted() {
    this.animatePills();
  },
};
</script>
