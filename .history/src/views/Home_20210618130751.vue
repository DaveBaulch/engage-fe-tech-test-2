<template>
  <main class="w-full overflow-hidden main">
    <div class="container m-auto debug">
      <section>
        <div class="text-center pt-12 xl:pt-22">
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
        <div class="text-center mt-5">
          <BaseLink type="router-link" to="/" text="Get started" />
        </div>
        <div class="text-center mt-5 xl:mt-12">
          <SpriteIcon
            name="poweredByHeineken"
            ariaLabel="Powered by Heineken"
            ariaHidden="false"
            class="
              inline-block
              w-12.125
              h-1.578125
              transform
              scale-75
              md:scale-100
            "
          />
        </div>

        <div class="mt-24 md:mt-36">
          <div class="lg:grid lg:grid-cols-12">
            <div class="lg:col-start-3 lg:col-span-8 lg:px-10 debug relative">
              <div
                class="absolute debug -top-72 -left-71 md:-top-25 md:-left-87.5"
              >
                <FeatureArrow class="transform scale-62 md:scale-100 z-10" />
              </div>

              <div class="absolute -right-24 -top-32 md:-right-16 z-10 debug">
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
                  absolute
                  top-0
                  left-0
                  w-full
                  h-full
                  flex
                  justify-center
                  items-center
                  debug
                "
              >
                <FeaturePhone
                  class="transform sm:scale-80 md:scale-100"
                  aria-label="Video - phone app walkthrough"
                />
              </div>

              <div
                class="
                  absolute
                  -bottom-24
                  lg:-bottom-44
                  -left-28
                  lg:-left-16
                  z-10
                  debug
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
          <PillList />
        </div>
      </section>

      <section class="px-1.125 pt-10 pb-20 md-px-0 bg-white">
        <div class="lg:grid lg:grid-cols-12 debug">
          <div class="lg:col-start-1 lg:col-span-4">
            <PlansAndPricing />
          </div>

          <div class="lg:hidden">
            <ComparissonTable />
          </div>

          <div class="hidden lg:block lg:col-start-6 lg:col-span-3">
            <ComparissonList1 />
          </div>

          <div class="hidden lg:block lg:col-start-9 lg:col-span-3">
            <ComparissonList2 />
          </div>
        </div>
      </section>
    </div>

    <div class="hidden">
      <BaseTickIcon />
      <BasePill />
      <FeatureSkew />
      <PageHeader />
      <SpriteGradient />
      <SpriteIcon />
    </div>
  </main>
</template>

<script>
import BaseLink from "@/components/BaseLink";
import BaseTickIcon from "@/components/BaseTickIcon";
import BasePill from "@/components/BasePill";
import ComparissonList1 from "@/components/ComparissonList1";
import ComparissonList2 from "@/components/ComparissonList2";
import ComparissonTable from "@/components/ComparissonTable";
import FeatureArrow from "@/components/FeatureArrow";
import FeaturePhone from "@/components/FeaturePhone";
import FeatureRoundel from "@/components/FeatureRoundel";
import FeatureSkew from "@/components/FeatureSkew";
import PageHeader from "@/components/PageHeader";
import PillList from "@/components/PillList";
import PlansAndPricing from "@/components/PlansAndPricing";
import SpriteGradient from "@/components/SpriteGradient";
import SpriteIcon from "@/components/SpriteIcon";

export default {
  name: "Index",
  components: {
    BaseLink,
    BaseTickIcon,
    BasePill,
    FeatureArrow,
    FeaturePhone,
    FeatureRoundel,
    FeatureSkew,
    PageHeader,
    PillList,
    PlansAndPricing,
    ComparissonTable,
    ComparissonList1,
    ComparissonList2,
    SpriteGradient,
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

<style>
.main {
  background-color: #f1f0fa;
}

@media only screen and (min-width: 1024px) {
  .main {
    background: linear-gradient(
      to bottom,
      #f1f0fa 806px,
      #f1f0fa 806px,
      white 806px,
      white 100%
    );
  }
}
</style>
