<template>
  <div>
    <div class="pt-14 pb-10">
      <h4>
        <SpriteIcon
          name="logo"
          ariaLabel="Swifty Standard"
          ariaHidden="true"
          class="inline-block w-8.4375 h-3.9375 text-appBlue leading-none"
        />
        <span class="sr-only">Swifty Standard</span>
      </h4>
      <h5>
        <SpriteIcon
          name="poweredByHeineken"
          ariaLabel="Powered by Heineken"
          ariaHidden="true"
          class="inline-block w-7.6875 h-4 transform scale-75 md:scale-100"
        />
        <span class="sr-only">Powered by Heineken</span>
      </h5>
    </div>
    <ComparissonList1List />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import BaseTickIcon from "@/components/BaseTickIcon";
import ComparissonList1List from "@/components/ComparissonList1List";
import ComparissonList1List from './ComparissonList1List.vue';
export default {
  name: "ComparissonList1",
  components: {
    SpriteIcon,
    BaseTickIcon,
    ComparissonList1List
    ComparissonList1List
  },
};
</script>
