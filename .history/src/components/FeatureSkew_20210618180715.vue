<template>
  <div class="relative z-0">
    <div
      class="relative z-10 ml-16  pt-skew rounded-featureSkew bg-gradient-to-r from-lightLavender-light to-lightLavender-dark skew debug md:ml-0"
    ></div>
    <div
      class="absolute ml-16  pt-skew rounded-featureSkew bg-appBlue opacity-10 skew debug md:ml-0 left-4 top-4 md:left-7 md:top-7"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FeatureSkew",
};
</script>

<style>
.skew {
  transform: perspective(100em) translateX(-108px) rotateY(-29deg);
  width: 116%;
}
</style>
