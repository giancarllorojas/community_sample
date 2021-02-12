<template>
  <div class="card-container" :class="`${color}`">
    <div class="card-head">
      <slot name="head"/>
    </div>
    <div class="card">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => 'bg-white'
    }
  }
}
</script>

<style lang="sass" scoped>
.card-container
  border: 1px solid #d1dceb
  @apply rounded-md
  .card
    @apply w-full rounded-md
</style>