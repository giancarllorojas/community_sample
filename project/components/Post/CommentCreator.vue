<template>
  <div class="comment-creator flex items-center px-3 md:px-6 mb-4 w-full">
    <Avatar :src="user.avatar" own/>
    <Editor hideMenu v-model="commentValue" placeholder="Escreva sua resposta"/>
    <Btn class="ml-2" color="#00E2A6">Publicar</Btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function(){
    return {
      commentValue: ''
    }
  },

  computed: {
    ...mapGetters({
      user: 'user/currentUser'
    })
  }
}
</script>

<style lang="sass" scoped>
.comment-creator
  .comment-creator__area
    width: 100%
    resize: none
    @apply bg-gray-200 rounded-lg outline-none px-3 py-2 border-2

    &:hover
      @apply bg-gray-100
    &:focus
      @apply bg-gray-100 border-2 border-secondary
</style>