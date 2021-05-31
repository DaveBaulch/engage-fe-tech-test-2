<template>
  <div class="transform -translate-y-pills">
    <ul role="list" class="xl:grid xl:grid-cols-2 gap-8 debug">
      <li class="place-self-end">
        <BasePill text="Order &amp; pay at table" />
      </li>
      <li><BasePill text="Increase your revenue" /></li>
      <li><BasePill text="Build customer loyalty" /></li>
      <li><BasePill text="Reservation management" /></li>
      <li><BasePill text="All-in-one solution" /></li>
      <li><BasePill text="Quick setup" /></li>
    </ul>
  </div>
</template>

<script>
import BasePill from "@/components/BasePill";

export default {
  name: "PillList",
  components: {
    BasePill,
  },
};
</script>
