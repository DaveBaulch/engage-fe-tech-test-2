<template>
  <div class="relative" style="z-index: -1">
    <div
      class="
        pt-skew
        rounded-featureSkew
        bg-gradient-to-r
        from-lightLavender-light
        to-lightLavender-dark
        skew
        debug
        scale-63
        md-scale-100
        ml-16
        md:ml-0
        relative
        z-10
      "
    ></div>
    <div
      class="
        pt-skew
        rounded-featureSkew
        bg-appBlue
        opacity-10
        skew
        debug
        scale-63
        md-scale-100
        absolute
        left-7
        top-7
      "
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
