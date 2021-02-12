<template>
  <div class="post-head flex justify-start pt-4">
    
    <Avatar v-if="!loading" :src="post.author.avatar"/>
    <div class="h-8 w-10 block rounded-full mr-2 justify-self-start self-start bg-gray-200 rounded animate-pulse" v-else>

    </div>
    <div class="post-head__data flex flex-col justify-center w-full">
      <div v-if="!loading" class="text-xl font-bold font-bold leading-none">
        {{post.title}}
      </div>
      <div v-else >
        <div class="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div class="h-2 w-1/4 mt-1 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div class="flex mt-1">
        <div v-if="!loading" class="text-xs text-gray-500 leading-none">
          <b class="cursor-pointer hover:text-secondary">{{post.author.name}}</b>
          {{createdAt}}
        </div>
      </div>
    </div>
    <div class="ml-auto">
      <BtnIcon name="mdiDotsHorizontal "/>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default {
  props: {
    post: Object,
    loading: Boolean
  },

  computed: {
    createdAt(){
      return dayjs(this.post.createdAt).fromNow()
    }
  }
}
</script>

<style lang="sass" scoped>
.post-head
  @apply mt-0
</style>