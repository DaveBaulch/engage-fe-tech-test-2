<template>
  <div class="transform -translate-y-pills">
    <ul role="list" class="xl:grid xl:grid-cols-2 gap-8 debug">
      <li class="place-self-end mr-32">
        <BasePill text="Order &amp; pay at table" />
      </li>
      <li class="place-self-start">
        <BasePill text="Increase your revenue" />
      </li>
      <li class="place-self-end mr-56">
        <BasePill text="Build customer loyalty" />
      </li>
      <li class="place-self-start">
        <BasePill text="Reservation management" />
      </li>
      <li class="place-self-end mr-32">
        <BasePill text="All-in-one solution" />
      </li>
      <li class="place-self-start"><BasePill text="Quick setup" /></li>
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
