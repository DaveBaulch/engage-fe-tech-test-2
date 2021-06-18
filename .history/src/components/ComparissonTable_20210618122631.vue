<template>
  <div>
    <table class="w-full">
      <caption class="sr-only">
        Comparisson table
      </caption>
      <tr>
        <td></td>
        <th>
          <SpriteIcon
            name="logo"
            ariaLabel="Swifty"
            ariaHidden="false"
            class="inline-block w-12 h-1.375 text-appBlue leading-none"
          />
          <br />
          <span>Standard</span>
        </th>
        <th>
          <SpriteIcon
            name="logo"
            ariaLabel="Swifty"
            ariaHidden="false"
            class="inline-block w-12 h-1.375 text-appBlue leading-none"
          />
          <br />
          <span>Plus</span>
        </th>
      </tr>
      <tr>
        <td class="py-1">Get started in 72hrs</td>
        <td class="text-center"><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">rder at table</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Loyalty campaigns</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Vouchers</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Point store</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Reservation management</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Mailshot feature</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Take deposits for bookings</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Limit table bookings</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1">Offer gift cards</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td class="py-1 text-2xl font-bold">
          No onboarding fee<br />
          <span class="text-xs font-normal">Payments 1% +10p</span>
        </td>
        <td class="text-2xl font-bold">
          &pound;49
          <br />
          <span class="text-xs font-normal">p/m</span>
        </td>
        <td class="text-2xl font-bold">
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
