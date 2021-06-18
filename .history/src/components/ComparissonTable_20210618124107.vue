<template>
  <div>
    <table class="w-full">
      <caption class="sr-only">
        Comparisson table
      </caption>
      <tr>
        <td></td>
        <th align="center">
          <SpriteIcon
            name="logo"
            ariaLabel="Swifty"
            ariaHidden="false"
            class="inline-block w-12 h-1.375 text-appBlue leading-none"
          />

          <span class="text-xs font-bold">Standard</span>
        </th>
        <th align="center">
          <SpriteIcon
            name="logo"
            ariaLabel="Swifty"
            ariaHidden="false"
            class="inline-block w-12 h-1.375 text-appBlue leading-none"
          />

          <span class="text-xs font-bold">Plus</span>
        </th>
      </tr>
      <tr>
        <td class="py-1">Get started in 72hrs</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Order at table</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Loyalty campaigns</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Vouchers</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Point store</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Reservation management</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Mailshot feature</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Take deposits for bookings</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Limit table bookings</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Offer gift cards</td>
        <td align="center"><BaseIcon /></td>
        <td align="center"><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1 text-2xl font-bold">
          No onboarding fee<br />
          <span class="text-xs font-normal">Payments 1% +10p</span>
        </td>
        <td align="center" class="text-2xl font-bold">
          &pound;49
          <br />
          <span class="text-xs font-normal">p/m</span>
        </td>
        <td align="center" class="text-2xl font-bold">
          &pound;169 <br />
          <span class="text-xs font-normal">p/m</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import BaseIcon from "@/components/BaseIcon";
export default {
  name: "ComparissonTable",
  components: {
    SpriteIcon,
    BaseIcon,
  },
};
</script>
