<template>
  <div class="pb-10 md:shadow-2xl rounded-bl-md rounded-br-md">
    <div class="relative overflow-hidden">
      <div
        class="pt-12 pb-12 pl-10 pr-10  bg-gradient-to-r from-lightLavender-light to-lightLavender-dark rounded-tl-md rounded-tr-md"
      >
        <h4>
          <SpriteIcon
            name="logo"
            ariaLabel="Swifty Plus"
            ariaHidden="true"
            class="inline-block w-8.4375 h-3.9375 text-white leading-none"
          />
          <SpriteIcon
            name="plus"
            ariaLabel="Plus"
            ariaHidden="true"
            class="inline-block w-6 h-6 ml-1 leading-none text-white mb-7"
          />
          <span class="sr-only">Swifty Plus</span>
        </h4>
        <h5>
          <SpriteIcon
            name="poweredByHeinekenSolid"
            ariaLabel="Powered by Heineken"
            ariaHidden="true"
            class="
              inline-block
              w-7.6875
              h-4
              transform
              scale-75
              md:scale-100
              text-white
            "
          />
          <span class="sr-only">Powered by Heineken</span>
        </h5>
        <div
          class="absolute w-full h-full origin-bottom-left transform -skew-y-6 bg-white  top-full -left-0"
          aria-hidden="true"
        />
      </div>
    </div>
    <ul role="list" class="pl-10 pr-10 mt-12">
      <li class="text-4xl font-bold">
        <dl class="leading-5">
          <dt>
            <span class="flex items-center">
              &pound;169 <span class="ml-2 text-xs">p/m</span></span
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
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Reservation management
      </li>
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Mailshot feature
      </li>
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Take deposits for bookings
      </li>
      <li class="flex items-center mt-4">
        <BaseTickIcon class="mr-2" />Limit table bookings
      </li>
    </ul>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import BaseTickIcon from "@/components/BaseTickIcon";
export default {
  name: "ComparissonList2",
  components: {
    SpriteIcon,
    BaseTickIcon,
  },
};
</script>
