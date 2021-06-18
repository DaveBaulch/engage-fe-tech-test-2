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
          Standard
        </th>
        <th>
          <SpriteIcon
            name="logo"
            ariaLabel="Swifty"
            ariaHidden="false"
            class="inline-block w-12 h-1.375 text-appBlue leading-none"
          />
          Plus
        </th>
      </tr>
      <tr>
        <td>Get started in 72hrs</td>
        <td class="text-center"><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Order at table</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Loyalty campaigns</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Vouchers</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Point store</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Reservation management</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Mailshot feature</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Take deposits for bookings</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Limit table bookings</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>Offer gift cards</td>
        <td><BaseIcon /></td>
        <td><BaseIcon /></td>
      </tr>
      <tr>
        <td>No onboarding fee Payments 1% +10p</td>
        <td>&pound;49 p/m</td>
        <td>&pound;169 p/m</td>
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
