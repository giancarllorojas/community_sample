<template>
  <Card class="post shadow mt-6 md:mt-8">
    <div class="post-text">
      <PostHead :loading="loading" class="px-3 md:px-6" :post="post"/>
      <PostBody :loading="loading" class="px-3 md:px-6" :post="post"/>
      <PostAttachments v-if="!loading" class="px-3 md:px-6" :post="post"/>
      <PostActions v-if="!loading" class="px-3 md:px-6" :post="post"/>
      <PostReply v-if="!loading" class="px-3 md:px-6" :post="post"/>
      <PostComments v-if="!loading" :post="post"/>
    </div>
  </Card>
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

</style>