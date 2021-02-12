<template>
  <div class="container mb-6 px-3 md:px-6">
    <AppContainer>
      <BoardHeader :loading="loading"/>
      <div v-if="!loading">
        <div v-for="post in posts" :key="post.id" class="posts">
          <Post :post="post"/>
        </div>
      </div>
      <div v-else>
        <Post loading :post="{}"/>
        <Post loading :post="{}"/>
        <Post loading :post="{}"/>
        <Post loading :post="{}"/>
        <Post loading :post="{}"/>
      </div>
    </AppContainer>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      loading: true,
      posts: [
        {
          id: 1,
          title: 'Diga oi e se introduza',
          author: {
            name: 'Raquel Lima',
            avatar: 'https://coredacao.com/content/images/2020/08/raquel--1-.jpg'
          },
          createdAt: new Date('2020-12-08 23:04:14'),
          media: [
            {
              type: 'image',
              path: '/images/forest.jpg'
            }
          ],
          body: '<p>Hello world</p><p>Daora em gente</p>'
        },
        {
          id: 2,
          title: 'Diga oi e se introduza',
          author: {
            name: 'Raquel Lima',
            avatar: 'https://coredacao.com/content/images/2020/08/raquel--1-.jpg'
          },
          createdAt: new Date('2020-12-08 23:04:14'),
          media: [
            {
              type: 'image',
              path: '/images/forest.jpg'
            }
          ],
          body: '<p>Hello world</p><p>Daora em gente</p>'
        },
        
      ]
    }
  },

  created(){
    this.loadData()
  },

  methods: {
    loadData(){
      setTimeout(() => {
        this.loading = false
      }, 400)
    }
  },

  components: {
    
  }
}
</script>

<style>

</style>