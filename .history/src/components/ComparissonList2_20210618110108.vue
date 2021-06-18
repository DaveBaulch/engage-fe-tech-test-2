<template>
  <div>
    <h4>
      <SpriteIcon
        name="logo"
        ariaLabel="Swifty Plus"
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
    <ul role="list">
      <li>&pound;169 p/m No onboarding fee Payments 1% +10p</li>
      <li>Get started in 72hrs</li>
      <li>Order at table</li>
      <li>Loyalty campaigns</li>
      <li>Vouchers</li>
      <li>Point store</li>
      <li>Reservation management</li>
      <li>Mailshot feature</li>
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
