<template>
  <div class="post__comments mt-2">
    <div class="post__comment px-3 md:px-6 pt-3">
      <PostComment :author="post.author" :comment="{
        body: 'Oi gente, muito legal esse post meu né',
        createdAt: new Date('2020-12-08 23:04:14')
      }">
        <template #thread>
          <PostComment :author="post.author" :comment="{
            body: 'Oi gente, muito legal esse post meu néOi gente, muito legal esse post meu néOi gente, muito legal esse post meu néOi gente, muito legal esse post meu néOi gente, muito legal esse post meu néOi gente, muito legal esse post meu né',
            createdAt: new Date('2020-12-08 23:04:14')
          }"/>
        </template>
      </PostComment>
      
      <PostComment :author="post.author" :comment="{
        body: 'Oi gente, muito legal esse post meu né',
        createdAt: new Date('2020-12-08 23:04:14')
      }"/>
      <PostComment :author="post.author" :comment="{
        body: 'Oi gente, muito legal esse post meu né',
        createdAt: new Date('2020-12-08 23:04:14')
      }"/>
      <PostComment :author="post.author" :comment="{
        body: 'Oi gente, muito legal esse post meu né',
        createdAt: new Date('2020-12-08 23:04:14')
      }"/>
    </div>
    <CommentCreator/>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style lang="sass" scoped>
.post__comments
  border-top: 1px solid #d1dceb
  
</style>