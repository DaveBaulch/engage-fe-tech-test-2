<template>
  <div>
    <h2 class="md:text-xl text-appBlue text-lg font-bold">
      Plans &amp; pricing
    </h2>
    <h3 class="md:text-4xl mt-4 text-2xl font-bold">
      First two months months
      <span class="text-appBlue uppercase">free</span><sup>*</sup>
    </h3>

    <p class="mt-4">
      Get started with Swifty today – there’s no onboarding fee.
    </p>
    <BaseLink type="router-link" to="/" text="Plans and pricing" class="mt-4" />
    <p class="md:text-sm mt-4 text-sm">
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
