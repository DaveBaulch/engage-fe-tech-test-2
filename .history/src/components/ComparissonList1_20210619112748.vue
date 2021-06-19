<template>
  <div>
    <div class="pt-14 pb-10">
      <h4>
        <SpriteIcon
          name="logo"
          ariaLabel="Swifty Standard"
          ariaHidden="true"
          class="inline-block w-8.4375 h-3.9375 text-appBlue leading-none"
        />
        <span class="sr-only">Swifty Standard</span>
      </h4>
      <h5>
        <SpriteIcon
          name="poweredByHeineken"
          ariaLabel="Powered by Heineken"
          ariaHidden="true"
          class="inline-block w-7.6875 h-4 transform scale-75 md:scale-100"
        />
        <span class="sr-only">Powered by Heineken</span>
      </h5>
    </div>
    <ul role="list" class="mt-12">
      <li class="text-4xl font-bold">
        <dl class="leading-5">
          <dt>
            <span class="flex items-center">
              &pound;49 <span class="ml-2 text-xs">p/m</span></span
            >
          </dt>
          <dd><span class="text-base font-bold">No onboarding fee</span></dd>
          <dd>
            <span class="text-xs font-normal">1% +10p</span>
          </dd>
        </dl>
      </li>
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Get started in 72hrs
      </li>
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Order at table
      </li>
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Loyalty campaigns
      </li>
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Vouchers
      </li>
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Point store
      </li>
    </ul>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import BaseTickIcon from "@/components/BaseTickIcon";
export default {
  name: "ComparissonList1",
  components: {
    SpriteIcon,
    BaseTickIcon,
  },
};
</script>
