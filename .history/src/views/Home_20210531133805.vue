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
            <table>
              <caption class="sr-only">
                Comparisson table
              </caption>
              <tr>
                <td></td>
                <th>Swifty Standard</th>
                <th>Swifty Plus</th>
              </tr>
              <tr>
                <td>Get started in 72hrs</td>
                <td>icon</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Order at table</td>
                <td>icon</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Loyalty campaigns</td>
                <td>icon</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Vouchers</td>
                <td>icon</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Point store</td>
                <td>icon</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Reservation management</td>
                <td>icon fade</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Mailshot feature</td>
                <td>icon fade</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Take deposits for bookings</td>
                <td>icon fade</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Limit table bookings</td>
                <td>icon fade</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Offer gift cards</td>
                <td>icon fade</td>
                <td>icon fade</td>
              </tr>
              <tr>
                <td>No onboarding fee Payments 1% +10p</td>
                <td>&pound;49 p/m</td>
                <td>&pound;169 p/m</td>
              </tr>
            </table>
          </div>

          <div class="hidden xl:block xl:col-start-6 xl:col-span-3">
            <ComparissonList1 />
          </div>

          <div class="hidden xl:block xl:col-start-9 xl:col-span-3">
            <ComparissonList1 />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import PillList from "@/components/PillList";
import PlansAndPricing from "@/components/PlansAndPricing";
import ComparissonList1 from "@/components/ComparissonList1";
import ComparissonList2 from "@/components/ComparissonList2";

export default {
  name: "Index",
  components: {
    PillList,
    PlansAndPricing,
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
