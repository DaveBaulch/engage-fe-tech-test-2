<template>
  <div>
    <ul role="list" class="grid">
      <li><BasePill text="Order &amp; pay at table" /></li>
      <li><BasePill text="Increase your revenue" /></li>
      <li><BasePill text="Build customer loyalty" /></li>
      <li><BasePill text="Reservation management" /></li>
      <li><BasePill text="All-in-one solution" /></li>
      <li><BasePill text="Quick setup" /></li>
    </ul>
  </div>
</template>

        <div class="xl:grid xl:grid-cols-12 debug">
          <div class="x:col-start-1 xl:col-span-4">

<script>
import BasePill from "@/components/BasePill";

export default {
  name: "PillList",
  components: {
    BasePill,
  },
};
</script>
