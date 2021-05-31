<template>
  <main>
    <div class="container mx-auto debug">
      <section>
        <div class="text-center">
          <h1>The App for Pubs and Bars</h1>
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
  </main>
</template>

<script>
import PillList from "@/components/BaseButton";
import PlansAndPricing from "@/components/PlansAndPricing";
import ComparissonTable from "@/components/ComparissonTable";
import ComparissonList1 from "@/components/ComparissonList1";
import ComparissonList2 from "@/components/ComparissonList2";

import PillList from "@/components/PillList";


export default {
  name: "Index",
  components: {
    PillList,
    PlansAndPricing,
    ComparissonTable,
    ComparissonList1,
    ComparissonList2,
  },
  metaInfo() {
    return {
      title: "Homepage • Swifty",
    };
  },
  methods: {},
};
</script>
