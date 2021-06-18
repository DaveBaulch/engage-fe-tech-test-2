<template>
  <div>
    <h4>
      <SpriteIcon
        name="logo"
        ariaLabel="Swifty Standard"
        ariaHidden="false"
        class="inline-block w-8.4375 h-3.9375 text-appBlue leading-none"
      />
    </h4>
    <h5>
      <SpriteIcon
        name="poweredByHeineken"
        ariaLabel="Powered by Heineken"
        ariaHidden="false"
        class="inline-block w-7.6875 h-4 transform scale-75 md:scale-100"
      />
    </h5>
    <ul role="list" class="mt-20">
      <li class="text-2xl md:text-4xl font-bold">
        <dl class="leading-5">
          <dt>
            <span class="flex items-center">
              &pound;49 <span class="text-sm md:text-sm ml-2">p/m</span></span
            >
          </dt>
          <dt><span class="text-base font-bold">No onboarding fee</span></dt>
          <dt><span class="text-sm md:text-sm font-normal">1% +10p</span></dt>
        </dl>
      </li>
      <li class="mt-4 flex"><BaseIcon />Point store</li>
      <li class="mt-4"><BaseIcon />Get started in 72hrs</li>
      <li class="mt-4"><BaseIcon />Order at table</li>
      <li class="mt-4"><BaseIcon />Loyalty campaigns</li>
      <li class="mt-4"><BaseIcon />Vouchers</li>
      <li class="mt-4"><BaseIcon />Point store</li>
    </ul>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import BaseIcon from "@/components/BaseIcon";
export default {
  name: "ComparissonList1",
  components: {
    SpriteIcon,
    BaseIcon,
  },
};
</script>
