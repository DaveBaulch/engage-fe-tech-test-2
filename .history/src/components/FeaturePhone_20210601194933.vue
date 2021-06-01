<template>
  <div>
    <div class="relative md:hidden">
      <img src="@/assets/phone/frame.png" class="absolute top-0 left-0" />
      <video width="152" height="416" class="mask" autoplay muted>
        <source src="@/assets/video/walkthrough.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="relative hidden md:visble">
      <img src="@/assets/phone/frame.png" class="absolute top-0 left-0" />
      <video width="230" height="628" class="mask" autoplay muted>
        <source src="@/assets/video/walkthrough.mp4" type="video/mp4" />
      </video>
    </div>
  <div>
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
