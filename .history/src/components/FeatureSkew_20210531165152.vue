<template>
  <div
    class="
      pt-skew
      rounded-featureSkew
      bg-gradient-to-r
      from-lightLavender-light
      to-lightLavender-dark
      debug
    "
  ></div>
</template>

<script>
export default {
  name: "FeatureSkew",
};
</script>

<style scoped>
    .skew{
      transform: perspective(100em) rotateY(-40deg);
      width: 126%;
      height: 34%;
    }
</style>
