<template>
  <div>
    <div class="overflow-hidden">
      <div
        class="
          bg-gradient-to-r
          from-lightLavender-light
          to-lightLavender-dark
          pt-12
          pr-6
          pb-12
          pl-6
          rounded-tl-md rounded-tr-md
          relative
          origin-bottom-left
          skew-x-12
        "
      >
        <h4>
          <SpriteIcon
            name="logo"
            ariaLabel="Swifty Plus"
            ariaHidden="false"
            class="inline-block w-8.4375 h-3.9375 text-white leading-none"
          />
          <SpriteIcon
            name="plus"
            ariaLabel="Plus"
            ariaHidden="true"
            class="inline-block w-6 h-6 mb-7 ml-1 text-white leading-none"
          />
        </h4>
        <h5>
          <SpriteIcon
            name="poweredByHeinekenSolid"
            ariaLabel="Powered by Heineken"
            ariaHidden="false"
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
        </h5>
      </div>
    </div>
    <ul role="list" class="mt-12">
      <li class="text-2xl md:text-4xl font-bold">
        <dl class="leading-5">
          <dt>
            <span class="flex items-center">
              &pound;169 <span class="text-sm md:text-sm ml-2">p/m</span></span
            >
          </dt>
          <dt><span class="text-base font-bold">No onboarding fee</span></dt>
          <dt>
            <span class="text-sm md:text-sm font-normal">1% +10p</span>
          </dt>
        </dl>
      </li>
      <li class="mt-4 flex items-center">
        <BaseIcon class="mr-2" />Get started in 72hrs
      </li>
      <li class="mt-4 flex items-center">
        <BaseIcon class="mr-2" />Order at table
      </li>
      <li class="mt-4 flex items-center">
        <BaseIcon class="mr-2" />Loyalty campaigns
      </li>
      <li class="mt-4 flex items-center"><BaseIcon class="mr-2" />Vouchers</li>
      <li class="mt-4 flex items-center">
        <BaseIcon class="mr-2" />Point store
      </li>
      <li class="mt-4 flex items-center">
        <BaseIcon class="mr-2" />Reservation management
      </li>
      <li class="mt-4 flex items-center">
        <BaseIcon class="mr-2" />Mailshot feature
      </li>
      <li>Take deposits for bookings</li>
      <li>Limit table bookings</li>
    </ul>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import BaseIcon from "@/components/BaseIcon";
export default {
  name: "ComparissonList2",
  components: {
    SpriteIcon,
    BaseIcon,
  },
};
</script>
