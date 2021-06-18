<template>
  <div>
    <h2 class="text-lg font-bold md:text-xl text-appBlue">
      Plans &amp; pricing
    </h2>
    <h3 class="mt-4 text-2xl font-bold md:text-4xl">
      First two months months
      <span class="uppercase text-appBlue">free</span><sup>*</sup>
    </h3>

    <p class="mt-4">
      Get started with Swifty today – there’s no onboarding fee.
    </p>
    <BaseLink type="router-link" to="/" text="Plans and pricing" class="mt-4" />
    <p class="mt-4 text-sm md:text-sm">
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
