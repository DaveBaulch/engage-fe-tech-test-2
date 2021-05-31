<template>

  <router-link v-if="type==='router-link'" :to="to"  class="button">{{ text }}</router-link>
  <a v-else-if="type ==='link'" :href="to"  class="button">{{ text }}</a>

</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    type: {
      type: String,
      default: 'router-link'
    },    
    text: {
      type: String,
      default: '',
      required: true
    },
    to: {
      type: String,
      default: '',
      required: true
    }
  } 
}
</script>

<script>


export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "router-link",
    },
    text: {
      type: String,
      default: null,
      required: false,
    },
    route: {
      type: String,
      default: "index",
      required: false,
    },
  },
};
</script>
