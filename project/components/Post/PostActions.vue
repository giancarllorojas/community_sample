<template>
  <div class="post-actions">
    <BtnIcon class="flex items-center" @click="like" fill="rgba(0,0,0,0.5)" name="mdiHeartOutline"/>
    <span class="text-xs text-gray-600">21 curtidas</span>
    <BtnIcon class="ml-4 flex items-center" @click="like" fill="rgba(0,0,0,0.5)" name="mdiCommentOutline"/>
    <span class="text-xs text-gray-600">32 comentários</span>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },

  data: function(){
    return {

    }
  },

  methods: {
    like(){

    }
  }
}
</script>

<style lang="sass" scoped>
.post-actions
  @apply flex items-center
</style>