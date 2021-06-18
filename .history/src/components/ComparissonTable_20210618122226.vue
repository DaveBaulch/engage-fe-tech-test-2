<template>
  <div>
    <table>
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
          <span>Standard</span>
        </th>
        <th>
          <SpriteIcon
            name="logo"
            ariaLabel="Swifty"
            ariaHidden="false"
            class="inline-block w-12 h-1.375 text-appBlue leading-none"
          />
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
        <td class="py-1 text-lg">
          No onboarding fee <span class="text-xs">Payments 1% +10p</span>
        </td>
        <td>&pound;49 <span class="text-xs">p/m</span></td>
        <td>&pound;169 <span class="text-xs">p/m</span></td>
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
