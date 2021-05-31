<template>
  <div>
    <ul role="list">
      <li><BasePill text="Order &amp; pay at table" />Order &amp; pay at table</li>
      <li><BasePill text="Order &amp; pay at table" />Increase your revenue</li>
      <li<BasePill text="Order &amp; pay at table" />>Build customer loyalty</li>
      <li><BasePill text="Order &amp; pay at table" />Reservation management</li>
      <li><BasePill text="Order &amp; pay at table" />All-in-one solution</li>
      <li><BasePill text="Order &amp; pay at table" />Quick setup</li>
    </ul>
  </div>
</template>

<script>
export default {
  import BaseIcon from "@/components/BaseIcon";
  
  name: "PillList",
  coponents: {
    basePill
  }
};
</script>
