<template>
  <div
      class="
        rounded-full
        bg-appBlue
        flex flex-row
        justify-center
        items-center
        w-20
        h-20
        xl:w-32
        xl:h-32
   "
    >
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import SpriteGradient from "@/components/SpriteGradient";

export default {
  name: "BaseIcon",
  components: {
    SpriteIcon,
    SpriteGradient,
  },  
};
</script>
