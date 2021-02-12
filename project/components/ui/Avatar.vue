<template>
  <div class="avatar">
    <img class="" :class="{'hover:shadow-lg cursor-pointer hover:shadow-lg hover:border-gray-200': !own}" :src="src"/>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    own: Boolean
  }
}
</script>

<style lang="sass" scoped>
.avatar
  width: 32px
  min-width: 32px
  height: 32px
  @apply mr-2 self-start flex items-start justify-center border border-transparent rounded-full transition-all
  img
    width: 32px
    min-width: 32px
    height: 32px
    @apply rounded-full
</style>