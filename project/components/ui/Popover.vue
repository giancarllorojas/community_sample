<template>
  <div v-click-outside="onOutsideClick" class="popover">
    <div @click="onActivate" class="popover__activator">
      <slot/>
    </div>
    <div v-show="value" :class="{'p-4': !fullWidth}" class="popover__content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullWidth: Boolean,
    value: Boolean
  },
  data: function(){
    return {
      
    }
  },

  methods: {
    onActivate(){
      this.$emit('input', !this.value)
    },

    onOutsideClick(){
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="sass" scoped>
.popover
  position: relative
  
  @apply select-none
  .popover__content
    position: absolute
    right: 0
    z-index: 5
    border: 1px solid rgba(209, 220, 235, 0.4)
    @apply bg-white shadow-lg rounded-md
</style>