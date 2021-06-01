<template>
  <div class="phone">
    <div class="relative sm:hidden">
      <img
        src="@/assets/phone/frame.png"
        class="absolute top-0 left-0 img"
        alt=""
        aria-hidden="true"
      />
      <video width="152" height="416" class="mask" autoplay muted>
        <source src="@/assets/video/walkthrough.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="relative hidden sm:block">
      <img
        src="@/assets/phone/frame.png"
        class="absolute top-0 left-0"
        alt=""
        aria-hidden="true"
      />
      <video width="230" height="628" class="mask2" autoplay muted>
        <source src="@/assets/video/walkthrough.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import prefersReducedMotion from "@/mixins/prefersReducedMotion";
import gsap from "gsap";

export default {
  name: "FeaturePhone",
  mixins: [prefersReducedMotion],
  methods: {
    animatePhone() {
      const animationIsOkay = this.prefersReducedMotion();
      if (animationIsOkay) {
        gsap
          .fromTo(
            ".phone",
            {

              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
            }
          )
          .delay(1);
      }
    },
  },
  mounted() {
    this.animatePhone();
  },
};
</script>

<style>
.img {
  width: 152px;
  height: 416px;
}

.mask {
  mask-image: url("../assets/phone/mask.png");
  mask-size: 152px 416px;
}

.mask2 {
  mask-image: url("../assets/phone/mask.png");
  mask-size: 230px 628px;
}
</style>
