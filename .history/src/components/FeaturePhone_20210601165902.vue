<template>
  <div>
    <div class="relative">
      <video width="230" height="628" class="" autoplay muted>
        <source src="@/assets/video/walkthrough.mp4" type="video/mp4" />
      </video>
      <img
        src="@/assets/phone/frame.png"
        class="absolute top-0 left-0 mask filter shadow-2xl"
      />
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
