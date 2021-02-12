<template>
  <div class="items-list">
    <div @click="$emit('click', item)" :class="{'item--active': value == item.value}" class="opacity-600 block cursor-pointer whitespace-nowrap hover:bg-gray-100 transition-all p-4 rounded-md" v-for="(item,i) in items" :to="item.to" :key="i">
      <Icon class="mr-2" v-if="item.icon" :name="item.icon"/>
      <span>
        {{item.text}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    value: Boolean
  }
}
</script>

<style lang="sass" scoped>
.items-list
  .item--active
    @apply bg-gray-100 opacity-100
</style>