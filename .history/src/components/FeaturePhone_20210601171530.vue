<template>
  <div>
    <div class="relative">
      <video width="230" height="628" class="mask" autoplay muted>
        <source src="@/assets/video/walkthrough.mp4" type="video/mp4" />
      </video>
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
  mask-clip: fill-box;
}
</style>
