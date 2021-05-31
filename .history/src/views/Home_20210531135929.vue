<template>
  <main>
    <div class="container mx-auto debug">
      <section>
        <div class="text-center">
          <h1 class="font-sans-bold text-3xl ">The App for Pubs and Bars</h1>
        </div>
        <div class="text-center"> 
          <a href="">Get started</a>
        </div>
        <div class="text-center">
          <p>Powered by <span class="uppercase">Heineken</span></p>
        </div>
        <PillList />
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
      <BaseButton />
      <BaseIcon />
      <BasePill />
      <FeatureArrow />
      <FeaturePhone />
      <FeatureRoundel />
      <FeatureSkew />
      <PageHeader />
      <SpriteGradient />
      <SpriteIcon />
    </div>
  </main>
</template>

<script>
import BaseButton from "@/components/BaseButton";
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
    BaseButton,
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
