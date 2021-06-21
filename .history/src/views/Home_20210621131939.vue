<template>
  <main class="main w-full overflow-hidden">
    <div class="debug container m-auto">
      <section>
        <div class="xl:pt-22 pt-12 text-center">
          <h1
            class="
              font-sans-bold
              tracking-minus2Percent
              text-3xl
              xl:text-5.5xl
              leading-9
              xl:leading-12
            "
          >
            The App for Pubs and Bars
          </h1>
        </div>
        <div class="mt-5 text-center">
          <BaseLink type="router-link" to="/" text="Get started" />
        </div>
        <div class="xl:mt-12 mt-5 text-center">
          <SpriteIcon
            name="poweredByHeineken"
            ariaLabel="Powered by Heineken"
            ariaHidden="false"
            class="
              inline-block
              <!--
              w-12.125
              h-1.578125
              -->
              w-[194px]
              h-[25px]
              ]
              transform
              scale-75
              md:scale-100
            "
          />
        </div>

        <div class="md:mt-36 mt-24">
          <div class="lg:grid lg:grid-cols-12">
            <div class="lg:col-start-3 lg:col-span-8 lg:px-10 debug relative">
              <div
                class="absolute debug -top-72 -left-71 md:-top-25 md:-left-87.5"
              >
                <FeatureArrow class="scale-62 md:scale-100 z-10 transform" />
              </div>

              <div class="-right-24 -top-32 md:-right-16 debug absolute z-10">
                <FeatureRoundel
                  class="
                    scale-68
                    md:scale-100
                    lg:scale-68
                    xl:scale-100
                    transform
                  "
                  aria-hidden="true"
                >
                  <SpriteIcon
                    name="beer"
                    class="text-cyan w-20"
                    alt=""
                    role="hidden"
                  />
                </FeatureRoundel>
              </div>

              <FeatureSkew aria-hidden="true" />

              <div
                class="
                  debug
                  absolute
                  top-0
                  left-0
                  flex
                  items-center
                  justify-center
                  w-full
                  h-full
                "
              >
                <FeaturePhone
                  class="transform sm:scale-80 md:scale-100"
                  aria-label="Video - phone app walkthrough"
                />
              </div>

              <div
                class="
                  -bottom-24
                  lg:-bottom-44
                  -left-28
                  lg:-left-16
                  debug
                  absolute
                  z-10
                "
              >
                <FeatureRoundel
                  class="
                    transform
                    scale-68
                    md:scale-100
                    lg:scale-68
                    xl:scale-100
                  "
                  aria-hidden="true"
                >
                  <img
                    src="../assets/icon/people.png"
                    class="w-20"
                    alt=""
                    aria-hidden="true"
                  />
                </FeatureRoundel>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            px-1.125
            md:px-0
            mt-24
            lg:mt-0
            lg:transform
            lg:-translate-y-120
            xl:-translate-y-135
          "
        >
          <PillList class="lg:mb-0 mb-10" />
        </div>
      </section>
    </div>

    <div class="bg-white">
      <div class="debug container m-auto">
        <section class="px-1.125 pt-10 md-pt-0 pb-20 md-px-0 bg-white">
          <div class="lg:grid lg:grid-cols-12 debug">
            <div class="lg:col-start-1 lg:col-span-4">
              <PlansAndPricing />
            </div>

            <div class="lg:hidden">
              <ComparissonTable />
            </div>

            <div class="lg:block lg:col-start-6 lg:col-span-3 hidden">
              <ComparissonList1 />
            </div>

            <div class="lg:block lg:col-start-9 lg:col-span-4 hidden">
              <ComparissonList2 />
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import BaseLink from "@/components/BaseLink";
import ComparissonList1 from "@/components/ComparissonList1";
import ComparissonList2 from "@/components/ComparissonList2";
import ComparissonTable from "@/components/ComparissonTable";
import FeatureArrow from "@/components/FeatureArrow";
import FeaturePhone from "@/components/FeaturePhone";
import FeatureRoundel from "@/components/FeatureRoundel";
import FeatureSkew from "@/components/FeatureSkew";
import PillList from "@/components/PillList";
import PlansAndPricing from "@/components/PlansAndPricing";
import SpriteIcon from "@/components/SpriteIcon";

export default {
  name: "Index",
  components: {
    BaseLink,
    FeatureArrow,
    FeaturePhone,
    FeatureRoundel,
    FeatureSkew,
    PillList,
    PlansAndPricing,
    ComparissonTable,
    ComparissonList1,
    ComparissonList2,
    SpriteIcon,
  },
  metaInfo() {
    return {
      title: "Homepage • Swifty",
    };
  },
  methods: {},
};
</script>
