<template>
  <div class="post-body py-3">
    <div v-if="!loading">
      <div v-for="(m,i) in post.media" :key="i" class="post-media">
        <ResponsiveImage class="rounded-md" :height="300" :src="m.path"/>
      </div>
    </div>
    <div v-if="!loading" v-html="post.body" class="post-body__content my-2">
        
    </div>
    <div v-else>
      <div class="mt-2 h-4 w-4/5 animate-pulse bg-gray-200 rounded"></div>
      <div class="mt-2 h-4 w-2/5 animate-pulse bg-gray-200 rounded"></div>
      <div class="mt-2 h-4 w-3/5 animate-pulse bg-gray-200 rounded"></div>
      <div class="mt-2 h-4 w-1/5 animate-pulse bg-gray-200 rounded"></div>
      <div class="mt-2 h-4 w-4/6 animate-pulse bg-gray-200 rounded"></div>
      <div class="mt-2 h-4 w-4/5 animate-pulse bg-gray-200 rounded"></div>
      <div class="mt-2 h-4 w-4/5 animate-pulse bg-gray-200 rounded"></div>
      <div class="mt-2 h-4 w-4/5 animate-pulse bg-gray-200 rounded"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    loading: Boolean
  }
}
</script>

<style lang="sass" scoped>
.post-body
  @apply text-lg
  .post-body__content
    font-size: 18px
    p
      font-weight: 500
</style>