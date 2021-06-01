<template>
  <div class="relative">
    <img
      src="@/assets/phone/frame.png"
      class="absolute top-0 left-0 shadow-2xl"
      style="
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        );
      "
    />
    <video width="230" height="628" class="mask" autoplay muted>
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
