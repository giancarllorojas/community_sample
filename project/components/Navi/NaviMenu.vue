<template>
  <div class="flex w-full relative container">
    <div v-if="value" class="navi-menu absolute ml-auto bg-white p-4">
      <slot/>
    </div>
  </div>
</template>

<script>
import {SlideYUpTransition} from 'vue2-transitions'

export default {
  props: {
    value: Boolean
  },

  methods: {
    onMenuOutside(){
      this.$emit('input', false)
    }
  },

  components: {
    SlideYUpTransition
  }
}
</script>

<style lang="sass" scoped>
.navi-menu
  z-index: 1
  width: 300px
  border: 1px solid rgba(209, 220, 235, 0.4)
  right: 32px
  height: 400px
  top: 4px
  @apply bg-white shadow-lg rounded-md p-4
.slide-enter-active 
  -moz-transition-duration: 0.3s 
  -webkit-transition-duration: 0.3s 
  -o-transition-duration: 0.3s 
  transition-duration: 0.3s 
  -moz-transition-timing-function: ease-in 
  -webkit-transition-timing-function: ease-in 
  -o-transition-timing-function: ease-in 
  transition-timing-function: ease-in 
.slide-leave-active 
  -moz-transition-duration: 0.3s 
  -webkit-transition-duration: 0.3s 
  -o-transition-duration: 0.3s 
  transition-duration: 0.3s 
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1) 
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1) 
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1) 
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1) 
.slide-enter-to, .slide-leave 
  max-height: 100px 
  overflow: hidden 
.slide-enter, .slide-leave-to 
  overflow: hidden 
  max-height: 0 
</style>