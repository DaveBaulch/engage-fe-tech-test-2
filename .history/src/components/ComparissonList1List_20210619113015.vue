<template>
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
