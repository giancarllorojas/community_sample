<template>
  <div class="post-comment w-full">
    <Avatar class="align-self" :src="author.avatar"/>
    <div class="w-full">
      <Card color="bg-gray-100" class="post-comment__content rounded-xl px-2 pb-2 pt-1 w-full">
        <b class="text-xs cursor-pointer opacity-80 hover:opacity-100 hover:underline transition-all">Raquel Lima</b>
        <p>
          {{comment.body}}
        </p>
      </Card>
      <div class="comment-actions mt-1">
        <Icon @click="like" size="18" class="cursor-pointer opacity-70 hover:opacity-100" fill="rgba(0,0,0,0.5)" name="mdiHeartOutline"/>
        <span class="text-xs ml-1">2 curtidas</span>
        <span class="mx-2"> · </span>
        <span class="text-xs font-bold cursor-pointer opacity-70 hover:opacity-100">Responder</span>
        <span class="text-xs text-gray-400 ml-auto">
          {{createdAt}}
        </span>
      </div>
      <div class="mt-4">
        <slot name="thread"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default {
  props: {
    author: Object,
    comment: Object
  },

  methods: {
    like(){

    }
  },

  computed: {
    createdAt(){
      return dayjs(this.comment.createdAt).fromNow()
    }
  }
}
</script>

<style lang="sass" scoped>
.post-comment
  @apply flex
  .comment-actions
    @apply flex items-center
</style>