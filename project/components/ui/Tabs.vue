<template>
  <div class="tabs">
    <div ref="container" class="tabs__container">
      <div @click="$emit('input', i)" :class="{'tab--active': value == i}" v-for="(t,i) in tabs" :key="i" class="tab">
        <span class="flex items-center">
          <span>{{t.name}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: () => 0
    },
    tabs: Array
  },

  data: function(){
    return {
      
    }
  },

  methods: {
   
  }
}
</script>

<style lang="sass" scoped>
.tabs
  position: relative
  @apply select-none max-w-full bg-white
  .tabs__container
    position: relative
    @apply flex max-w-full overflow-x-auto
    .tab
      cursor: pointer
      @apply mr-6 py-3 opacity-60 text-gray-600 flex items-start font-medium
      .tab__icon
        margin-left: -2px
      &:hover
        @apply opacity-100
    .tab--active
      @apply opacity-100 border-b-2 border-secondary
  .tabs__slider
    height: 4px
    margin-top: -3px
    position: absolute
    transition: all 200ms ease-out
    @apply bg-primary
</style>