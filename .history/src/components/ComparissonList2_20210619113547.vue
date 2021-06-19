<template>
  <div class="md:shadow-2xl rounded-bl-md rounded-br-md pb-10">
    <div class="relative overflow-hidden">
      <div
        class="
          bg-gradient-to-b
          from-lightLavender-light
          to-lightLavender-dark
          rounded-tl-md rounded-tr-md
          pt-14
          pb-10
          pl-16
          pr-10
        "
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
            class="mb-7 inline-block w-6 h-6 ml-1 leading-none text-white"
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
          class="
            top-full
            -left-0
            absolute
            w-full
            h-full
            origin-bottom-left
            transform
            -skew-y-6
            bg-white
          "
          aria-hidden="true"
        />
      </div>
    </div>
    <ComparissonList2List />
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import ComparissonList2List from "@/components/ComparissonList2List";

export default {
  name: "ComparissonList1",
  components: {
    SpriteIcon,
    ComparissonList2List,
  },
};
</script>
