<template>
  <ul role="list" class="md:grid md:grid-cols-2 lg:gap-8 debug">
    <li class="mb-2.5 lg:mb-0 md:place-self-center lg:place-self-end lg:mr-32">
      <BasePill text="Order &amp; pay at table" class="pill" />
    </li>
    <li
      class="mb-2.5 lg:mb-0 md:place-self-center lg:place-self-start lg:ml-32"
    >
      <BasePill text="Increase your revenue" class="pill" />
    </li>
    <li class="mb-2.5 lg:mb-0 md:place-self-center lg:place-self-end lg:mr-44">
      <BasePill text="Build customer loyalty" class="pill" />
    </li>
    <li
      class="mb-2.5 lg:mb-0 md:place-self-center lg:place-self-start lg:ml-44"
    >
      <BasePill text="Reservation management" class="pill" />
    </li>
    <li class="mb-2.5 lg:mb-0 md:place-self-center lg:place-self-end lg:mr-32">
      <BasePill text="All-in-one solution" class="pill" />
    </li>
    <li
      class="mb-2.5 lg:mb-0 md:place-self-center lg:place-self-start lg:ml-32"
    >
      <BasePill text="Quick setup" class="pill" />
    </li>
  </ul>
</template>

<script>
import BasePill from "@/components/BasePill";
import prefersReducedMotion from "@/mixins/prefersReducedMotion";
import gsap from "gsap";

export default {
  name: "PillList",
  components: {
    BasePill,
  },
  mixins: [prefersReducedMotion],
  methods: {
    animatePills() {
      const animationIsOkay = this.prefersReducedMotion();
      if (animationIsOkay) {
        const child = document.querySelector(".pill:nth-child(2)");
        gsap
          .fromTo(
            child,
            {
              x: -40,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 0.95,
              duration: 1,
              stagger: {
                each: 0.5,
              },
            }
          )
          .delay(1);
      }
    },
  },
  mounted() {
    this.animatePills();
  },
};
</script>
