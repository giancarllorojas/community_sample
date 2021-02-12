<template>
  <div @mouseleave="onHoverOutside" class="tooltip">
    <div ref="activator" @mouseenter="onActivate" class="tooltip__activator">
      <slot/>
    </div>
    <div v-if="show" class="tooltip__content">{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    fullWidth: Boolean,
    value: Boolean,
    text: String
  },
  data: function(){
    return {
      show: false,
      w: 0
    }
  },

  methods: {
    onActivate(){
      this.show = true
    },

    onHoverOutside(){
      this.show = false
    }
  }
}
</script>

<style lang="sass" scoped>
.tooltip
  position: relative
  @apply select-none
  .tooltip__activator
    @apply relative
  .tooltip__content
    position: absolute
    z-index: 5
    left: 50%
    transform: translateX(-50%)
    border: 1px solid rgba(209, 220, 235, 0.4)
    white-space: nowrap
    padding: 3px 6px
    @apply bg-primary text-white shadow-lg rounded-md text-xs opacity-50 mt-1
</style>