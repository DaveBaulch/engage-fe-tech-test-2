<template>
  <div>
    <div
      class="
        relative
        rounded-full
        bg-gradient-to-b
        from-lightLavender-light
        to-lightLavender-dark
        w-1.625
        h-1.625
      "
      aria-hidden="true"
    >
      <SpriteIcon
        name="check"
        class="absolute top-0 right-0 w-5 h-5 text-white"
      />
    </div>
    <span class="sr-only">Yes</span>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";

export default {
  name: "BaseTickIcon",
  components: {
    SpriteIcon,
  },
  props: {
    ariaText: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
