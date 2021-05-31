<template>
  <div class="transform -translate-y-pills">
    <ul role="list" class="xl:grid xl:grid-cols-2 gap-8 debug">
      <li class="place-self-end mr-32 c">
        <BasePill text="Order &amp; pay at table" />
      </li>
      <li class="place-self-start ml-32">
        <BasePill text="Increase your revenue" />
      </li>
      <li class="place-self-end mr-44">
        <BasePill text="Build customer loyalty" />
      </li>
      <li class="place-self-start ml-44">
        <BasePill text="Reservation management" />
      </li>
      <li class="place-self-end mr-32">
        <BasePill text="All-in-one solution" />
      </li>
      <li class="place-self-start ml-32"><BasePill text="Quick setup" /></li>
    </ul>
  </div>
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
