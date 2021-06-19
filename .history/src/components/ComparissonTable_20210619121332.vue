<template>
  <div>
    <table class="w-full mt-10">
      <caption class="sr-only">
        Comparisson table
      </caption>
      <tr>
        <td></td>
        <th>
          <div class="flex flex-col items-center mb-4">
            <SpriteIcon
              name="logo"
              ariaLabel="Swifty"
              ariaHidden="false"
              class="inline-block w-12 h-1.375 text-appBlue leading-none"
            />

            <span class="text-xs font-bold">Standard</span>
          </div>
        </th>
        <th>
          <div class="flex flex-col items-center mb-4">
            <SpriteIcon
              name="logo"
              ariaLabel="Swifty"
              ariaHidden="false"
              class="inline-block w-12 h-1.375 text-appBlue leading-none"
            />

            <span class="text-xs font-bold">Plus</span>
          </div>
        </th>
      </tr>
      <tr>
        <td class="py-1.5">Get started in 72hrs</td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Order at table</td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Loyalty campaigns</td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Vouchers</td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Point store</td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Reservation management</td>
        <td align="center"><BaseBlankIcon /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Mailshot feature</td>
        <td align="center"><BaseBlankIcon /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Take deposits for bookings</td>
        <td align="center"><BaseBlankIcon /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Limit table bookings</td>
        <td align="center"><BaseBlankIcon /></td>
        <td align="center"><BaseTickIcon ariaText="Yes" /></td>
      </tr>
      <tr>
        <td class="py-1.5">Offer gift cards</td>
        <td align="center"><BaseBlankIcon /></td>
        <td align="center">
          <BaseBlankIcon />
        </td>
      </tr>
      <tr>
        <td class="py-4 text-2xl font-bold">
          <div class="flex flex-col justify-center">
            <span>No onboarding fee</span>
            <span class="text-xs font-normal">Payments 1% +10p</span>
          </div>
        </td>
        <td align="center" class="text-2xl font-bold">
          <div class="flex flex-col justify-center">
            <span>&pound;49</span>
            <span class="text-xs font-normal">p/m</span>
          </div>
        </td>
        <td align="center" class="text-2xl font-bold">
          <div class="flex flex-col justify-center">
            <span>&pound;169</span>
            <span class="text-xs font-normal">p/m</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import BaseTickIcon from "@/components/BaseTickIcon";
import BaseBlankIcon from "@/components/BaseBlankIcon";
export default {
  name: "ComparissonTable",
  components: {
    SpriteIcon,
    BaseTickIcon,
    BaseBlankIcon,
  },
};
</script>
