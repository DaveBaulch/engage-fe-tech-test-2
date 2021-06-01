<script>
import arrowOutline from "../assets/icon/arrow-outline.svg";
import arrow from "../assets/icon/arrow.svg";
import beer from "../assets/icon/beer.svg";
import check from "../assets/icon/check.svg";
import chevronRight from "../assets/icon/chevron-right.svg";
import dashCircle from "../assets/icon/dash-circle.svg";
import logo from "../assets/icon/logo.svg";
import plus from "../assets/icon/plus.svg";
import poweredByHeineken from "../assets/icon/powered-by-heineken.svg";
import poweredByHeinekenSolid from "../assets/icon/powered-by-heineken-solid.svg";

const iconMap = {
  arrowOutline: arrowOutline.id,
  arrow: arrow.id,
  beer: beer.id,
  check: check.id,
  chevronRight: chevronRight.id,
  dashCircle: dashCircle.id,
  logo: logo.id,
  plus: plus.id,
  poweredByHeineken: poweredByHeineken.id,
  poweredByHeinekenSolid: poweredByHeinekenSolid.id,
};

export default {
  props: {
    name: {
      type: String,
      required: true,
      validate: (name) => Object.keys(iconMap).includes(name),
    },
  },
  computed: {
    iconId() {
      return iconMap[this.name];
      alert()
    },
  },
};
</script>

<template>
  <svg class="fill-current" role="img" focusable="false">
    <use :xlink:href="`#${iconId}`" />
    <span class="sr-only">{{ iconId }}</span>
  </svg>
</template>
