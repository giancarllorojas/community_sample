<template>
  <button v-bind="$attrs" v-on="$listeners" :class="{'btn-badge--active': !!value && !loading, 'btn-badge--loading': loading}" class="btn-badge">
    <div v-if="!loading" class="flex items-center">
      <slot/>
      <div class="h-full btn-badge__badge text-xs flex items-center justify-center font-bold px-1 ml-2">
        {{count}}
      </div>
    </div>
    <div v-else class="h-5 w-20 btn-badge__badge bg-gray-200 animate-pulse">

    </div>
  </button>
</template>

<script>
export default {
  props: {
    value: Boolean,
    loading: Boolean,
    count: Number
  }
}
</script>

<style lang="sass" scoped>
.btn-badge
  height: 42px
  @apply border-b-2 border-transparent outline-none font-bold text-gray-500 mr-4 opacity-80 transition-all select-none
  .btn-badge__badge
    @apply bg-gray-200 rounded-md

  &:hover
    @apply text-gray-800

.btn-badge--active
  @apply  border-secondary text-secondary opacity-100
  .btn-badge__badge
    @apply bg-secondary text-white

  &:hover
    @apply text-secondary
</style>