<template>
  <main class="w-full main">
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
            class="w-9.5625 xl:w-12.125 h-5 xl:h-1.578125 inline-block"
          />
        </div>

        <div class="mt-36">
          <div class="xl:grid xl:grid-cols-12">
            <div class="xl:col-start-3 xl:col-span-8 xl:px-10 debug relative">
              <div class="absolute debug" style="top: -360px; left: -1400px">
                <FeatureArrow />
              </div>

              <div class="absolute -top-32 -right-16 z-10 debug">
                <FeatureRoundel>
                  <SpriteIcon name="beer" class="text-cyan w-12 xl:w-20" />
                </FeatureRoundel>
              </div>

              <FeatureSkew />
              <div
                class="
                  absolute
                  top-1/2
                  left-1/2
                  transform
                  -translate-x-2/4 -translate-y-2/4
                "
              >
                <FeaturePhone />
              </div>

              <div class="absolute -bottom-44 -left-16 z-10 debug">
                <FeatureRoundel>
                  <img src="../assets/icon/people.png" class="w-12 xl:w-20" />
                </FeatureRoundel>
              </div>
            </div>
          </div>
        </div>

        <div class="px-1.125 md: px-0">
          <PillList />
        </div>
      </section>

      <section>
        <div class="xl:grid xl:grid-cols-12 debug">
          <div class="x:col-start-1 xl:col-span-4">
            <PlansAndPricing />
          </div>

          <div class="xl:hidden">
            <ComparissonTable />
          </div>

          <div class="hidden xl:block xl:col-start-6 xl:col-span-3">
            <ComparissonList1 />
          </div>

          <div class="hidden xl:block xl:col-start-9 xl:col-span-3">
            <ComparissonList2 />
          </div>
        </div>
      </section>
    </div>

    <div class="hidden">
      <BaseIcon />
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
import BaseIcon from "@/components/BaseIcon";
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
    BaseIcon,
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
  @media only screen and (min-width: 1024px) {
    background: linear-gradient(
      to bottom,
      #000 806px,
      #000 806px,
      white 806px,
      white 100%
    );
  }
}
</style>
