<template>
  <component :is="!!tooltip ? 'Tooltip' : 'div'" :text="tooltip">
    <component :is="!!to ? 'nuxt-link' : 'div'" :to="to" class="btn-icon rounded-full cursor-pointer flex items-center justify-center">
      <Icon v-bind="$attrs" v-on="$listeners"/>
    </component>
  </component>
</template>

<script>
export default {
  props: {
    to: String,
    tooltip: String
  }
}
</script>

<style lang="sass">
.btn-icon
  width: 32px
  height: 32px
  transition: all 150ms ease-in
  @apply self-start
  &:hover
    @apply bg-gray-200
</style>