<template>
  <div class="relative">
    <img
      src="@/assets/phone/frame.png"
      class="absolute top-0 left-0"
      style="
        filter: invert(1) brightness(100%) sepia(50%) saturate(100000%);
        filter: opacity(0%);
      "
    />
    <img
      src="@/assets/phone/frame.png"
      class="absolute top-0 left-0 shadow-2xl"
    />
    <video width="230" height="628" class="mask z-20" autoplay muted>
      <source src="@/assets/video/walkthrough.mp4" type="video/mp4" />
    </video>
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
  mask-clip: fill-box;
}
</style>
