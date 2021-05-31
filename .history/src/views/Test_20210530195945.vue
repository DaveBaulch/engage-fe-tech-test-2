<template>
  <div class="home sm:overflow-hidden">
    <div class="container mx-auto debug">Container</div>
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <h2 class="text-3xl">Icons filled</h2>
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
    <SpriteIcon name="beer" class="text-cyan w-2/4" />
    <SpriteIcon name="check" class="text-cyan w-2/4" />
    <SpriteIcon name="chevronRight" class="text-cyan w-2/4" />
    <SpriteIcon name="dashCircle" class="text-cyan w-2/4 circle" />
    <SpriteIcon name="logo" class="text-cyan w-24" />
    <SpriteIcon name="plus" class="text-cyan w-2/4" />
    <SpriteIcon name="poweredByHeineken" class="w-2/4" />
    <SpriteIcon name="poweredByHeinekenSolid" class="text-cyan w-2/4" />
    <SpriteIcon name="poweredByHeinekenSolid" class="text-cyan w-2/4" />

    <h2 class="text-3xl">Font weights</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.<br />Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.<br />Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p class="font-sans-bold leading-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.<br />Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <h2 class="text-3xl">Font weights</h2>
    <p class="text-lavender text-4xl">Font n5 - regular</p>
    <p class="text-lavender text-4xl font-bold">Font n5 - 700</p>
    <p class="text-lavender text-4xl font-sans-bold">Font n7 - bold</p>

    <h2 class="text-3xl">Custom colours</h2>
    <p class="text-midnight text-4xl font-sans-bold">midnight</p>
    <p class="text-appBlue text-4xl font-sans-bold">appBlue</p>
    <p class="text-cyan text-4xl font-sans-bold">cyan</p>
    <p class="text-background text-4xl font-sans-bold">background</p>
    <p class="text-lavender text-4xl font-sans-bold">lavender</p>
    <p class="text-lightLavender-light text-4xl font-sans-bold">
      lightLavender light
    </p>
    <p class="text-lightLavender-dark text-4xl font-sans-bold">
      lightLavender dark
    </p>
    <p class="text-darkLavender-light text-4xl font-sans-bold">
      darkLavender light
    </p>
    <p class="text-darkLavender-dark text-4xl font-sans-bold">
      darkLavender dark
    </p>

    <h2 class="text-3xl">Video</h2>
    <video width="230" height="628" autoplay muted>
      <source src="@/assets/video/walkthrough.mp4" type="video/mp4" />
    </video>

    <SpriteGradient />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import SpriteGradient from "@/components/SpriteGradient";
import prefersReducedMotion from "@/mixins/prefersReducedMotion";
import gsap from "gsap";

export default {
  name: "Home",
  components: {
    SpriteIcon,
    SpriteGradient,
  },
  metaInfo() {
    return {
      title: "Test page",
    };
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
  },
  mounted() {
    this.animateCircle();
  },
};
</script>
