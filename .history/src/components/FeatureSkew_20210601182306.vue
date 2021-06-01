<template>
  <div class="relative z-0">
    <div
      class="
        pt-skew
        rounded-featureSkew
        bg-gradient-to-r
        from-lightLavender-light
        to-lightLavender-dark
        skew
        debug
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
        ml-16
        md:ml-0
        absolute
        left-4
        top-4
        md:left-7
        md:top-7
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
