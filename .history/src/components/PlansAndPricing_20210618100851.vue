<template>
  <div>
    <h2 class="text-lg md:text-xl font-bold text-appBlue">
      Plans &amp; pricing
    </h2>
    <h3 class="text-2xl md:text-4xl font-bold tt-4">
      First two months months
      <span class="uppercase text-appBlue">free</span><sup>*</sup>
    </h3>

    <p>Get started with Swifty today – there’s no onboarding fee.</p>
    <BaseLink type="router-link" to="/" text="Plans and pricing" />
    <p class="text-sm md:text-sm">
      <sup>*</sup>Existing Heineken customers only. Non-Heineken customers get
      one month free.
    </p>
  </div>
</template>

<script>
import BaseLink from "@/components/BaseLink";
export default {
  name: "PlansAndPricing",
  components: {
    BaseLink,
  },
};
</script>
