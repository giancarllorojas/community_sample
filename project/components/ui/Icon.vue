<template>
  <svg 
    viewBox="0 0 24 24" 
    :fill="fill"
    :height="size"
    :width="size"
    class="mdi-icon"
    :style="{ transform: `rotate(${this.rotate}deg)`, display: 'inline-block' }"
     v-on="$listeners"
  >
    <title v-if="title">{{ title }}</title>
    <path :d="icon"></path>
  </svg>
</template>

<script>
import camelcase from 'lodash.camelcase';
export default {

props: {
    name: String,
    title: String,
    size: {
      type: [String, Number],
      default: 24,
    },
    fill: {
      type: String,
      default: '#33404F',
    },
    rotate: {
      type: Number,
      default: 0
    },
  },
  lib: {},
  add(icons) {
    if (typeof icons === 'object' && icons !== null) {
      this.lib = icons;
    }
  },
  computed: {
    icon() {
      const icon = this.$icons[camelcase(this.name)];

      if (typeof icon === 'undefined') {
        console.error(`[${this.name}] Name of the icon is incorrect`);
        return;
      }
      return icon;
    }
  }
};
</script>