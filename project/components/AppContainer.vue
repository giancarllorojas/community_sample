<template>
  <div class="app-container flex nowrap">
    <SideMenu :class="{'app-container__side': hasScrolled}" class="sm:mr-6 md:mr-10" v-if="side"/>
    <div class="app-container__content w-full sm:mr-4 md:mr-0">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    side: {
      type: Boolean,
      default: () => true
    }
  },

  data: function(){
    return {
      hasScrolled: false,
      evt: null
    }
  },

  mounted(){
    document.addEventListener('scroll', this.onScroll)
    console.log(this.evt)
  },

  methods: {
    onScroll(){
      this.hasScrolled = true

      document.removeEventListener('scroll', this.onScroll)
    }
  }
}
</script>

<style lang="sass" scoped>
.app-container
  @apply relative
  .app-container__side
    top: 80px
    @apply sticky
</style>