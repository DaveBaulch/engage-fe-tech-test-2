<template>
  <div class="relative" aria-hidden="true">
    <SpriteIcon
      name="dashCircle"
      class="text-cyan absolute top-0 left-0 w-full h-full circle"
    />
    <div
      class="
        flex flex-row
        justify-center
        items-center
        w-40
        h-40
        xl:w-56
        xl:h-56
      "
    >
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
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SpriteIcon from "@/components/SpriteIcon";
import prefersReducedMotion from "@/mixins/prefersReducedMotion";
import gsap from "gsap";

export default {
  name: "FeatureRoundel",
  components: {
    SpriteIcon,
  },
  mixins: [prefersReducedMotion],
  methods: {
    animateCircle() {
      const animationIsOkay = this.prefersReducedMotion();
      if (animationIsOkay) {
var R = 290 , dur = 7 , 
 totalCount = 3 , // Try to change "totalCount" to for example 7 or even 30 :D
 Ease = Linear.easeNone ; // don't forget to change ease type, for example Expo.easeOut

for( var i=totalCount-1; i--; ){
  var cloneG = document.querySelector('.g1').cloneNode();
  document.querySelector('svg').appendChild(cloneG)
};

var tl = new TimelineLite()
.staggerTo(".g1", dur ,{
bezier:{curviness:1.5,values:[{x:0,y:0},{x:R/2,y:R/2},{x:0,y:R},{x:-R/2,y:R/2},{x:0,y:0}]}
, rotation:1080 , repeat:-1 , ease:Ease , transformOrigin:'center' },dur/totalCount)
.to("svg", dur*2 ,{rotation:-360,ease:Power0.easeNone,repeat:-1},0)
.time( dur ); // you can remove .time(dur) to start normally :)        
        gsap.fromTo(
          ".circle",
          { rotation: 0 },
          {
            rotation: -360,
            transformOrigin: "center",
            repeat: -1,
            ease: "none",
          }
        );
      }
    },
  },

  mounted() {
    this.animateCircle();
  },
};
</script>
