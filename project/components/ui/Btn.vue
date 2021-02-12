<template>
  <button :style="style" v-bind="$attrs" v-on="$listeners" :disabled="disabled" :class="{'btn--disabled': disabled}" class="btn">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    color: String,
    height: {
      type: String | Number,
      default: () => ('30')
    },
    textColor: {
      type: String,
      default: () => ('#fff')
    },
    dark: Boolean,
    disabled: Boolean
  },

  computed: {
    style(){
      if(this.disabled) return {}
      return {'background-color': this.color, 'color': this.textColor, 'height': `${this.height}px`}
    }
  }
}
</script>

<style lang="sass" scoped>
.btn
  @apply font-bold rounded-md px-5 py-1 outline-none transition-all select-none
  &:hover
    @apply opacity-80

.btn--disabled
  @apply bg-gray-200 text-gray-500
  &:hover
    @apply opacity-100
</style>