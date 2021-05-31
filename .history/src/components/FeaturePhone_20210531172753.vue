<template>
  <div>
    <div class="relative">

      <img src="@/assets/phone/frame.png" class="absolute top-0 left-0" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturePhone",
};
</script>

<style>
.mask {
  mask-image: url("../assets/phone/mask.png");
  mask-size: 230px 628px;
}
</style>
