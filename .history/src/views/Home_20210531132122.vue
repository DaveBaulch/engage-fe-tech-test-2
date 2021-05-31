<template>
  <main>
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
      <div>
        <ul role="list">
          <li>Order &amp; pay at table</li>
          <li>Increase your revenue</li>
          <li>Build customer loyalty</li>
          <li>Reservation management</li>
          <li>All-in-one solution</li>
          <li>Quick setup</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Plans &amp; pricing</h2>
      <h3>
        First two months months <span class="uppercase">free</span><sup>*</sup>
      </h3>

      <p>Get started with Swifty today – there’s no onboarding fee.</p>
      <a href="">Get started with Swifty</a>
      <p>
        <sup>*</sup>Existing Heineken customers only. Non-Heineken customers get
        one month free.
      </p>

      <div class="">
        <table class="xl:hidden">
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

        <div class="hidden xl:block">
          <h4>Swifty <span class="sr-only">Standard</span></h4>
          <h5>Powered by <span class="uppercase">Heineken</span></h5>
          <ul role="list">
            <li>&pound;49 p/m No onboarding fee Payments 1% +10p</li>
            <li>Get started in 72hrs</li>
            <li>Order at table</li>
            <li>Loyalty campaigns</li>
            <li>Vouchers</li>
            <li>Point store</li>
          </ul>
        </div>

        <div class="hidden xl:block">
          <h4>Swifty <span class="sr-only">Plus</span></h4>
          <h5>Powered by <span class="uppercase">Heineken</span></h5>
          <ul role="list">
            <li>&pound;169 p/m No onboarding fee Payments 1% +10p</li>
            <li>Get started in 72hrs</li>
            <li>Order at table</li>
            <li>Loyalty campaigns</li>
            <li>Vouchers</li>
            <li>Point store</li>
            <li>Reservation management</li>
            <li>Mailshot feature</li>
            <li>Take deposits for bookings</li>
            <li>Limit table bookings</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Index",
  componenits: {},
  metaInfo() {
    return {
      title: "Homepage • Swifty",
    };
  },
  methods: {},
};
</script>
