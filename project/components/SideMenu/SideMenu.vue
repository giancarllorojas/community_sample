<template>
  <div class="hidden sm:block side-menu self-start select-none sm:pl-4 md:pl-0">
    <div v-for="c in data" :key="c.id" class="cursor-pointer">
      <div class="font-black uppercase tracking-wider pb-1 flex items-center">
        <div @click="switchCat(c)" class="flex opacity-70 hover:opacity-100">
          <Icon :rotate="!c.closed ? 0 : 180" class="mr-1" name="mdiMenuDownOutline"></Icon>
          <div class="flex items-center leading-none">
            {{c.title}}
          </div>
        </div>
        <div class="flex items-center ml-auto opacity-70 hover:opacity-100">
          <Icon size="18" name="mdiPlusCircleOutline"></Icon>
        </div>
      </div>
      <SlideYUpTransition mode="out-in" :duration="0">
        <div v-show="!c.closed" class="mb-10">
          <div @click="onMenuClick(c,b)" class="transition-colors mt-1 flex font-bold side-menu__item p-1 rounded-md " :class="{'side-menu__item--active bg-primary': currentBoard[0] === c.id && currentBoard[1] === b.id}" v-for="b in c.boards" :key="b.id">
            <div class="mr-1 side-menu__emoji">{{b.emoji}}</div><span>{{b.title}}</span>
          </div>
        </div>
      </SlideYUpTransition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { SlideYUpTransition } from 'vue2-transitions'

export default {
  data: function(){
    return {
      
    }
  },

  methods: {
    ...mapMutations({
      setCurrentBoard: 'menu/setCurrentBoard',
      closeCategory: 'menu/closeCategory'
    }),
    onMenuClick(cat, board){
      this.setCurrentBoard([cat.id, board.id])
      this.$router.push(`/c/` + board.slug)
    },
    switchCat(cat){
      this.closeCategory(cat)
    }
  },

  created(){
    console.log('curr', this.currentBoard)
  },

  computed: {
    ...mapGetters({
      currentBoard: 'menu/currentBoard',
      data: 'menu/categories'
    })
  },

  components: {
    SlideYUpTransition
  }
}
</script>

<style lang="sass" scoped>
.side-menu
  max-width: 240px
  width: 100%
  .side-menu__item
    .side-menu__emoji
      width: 24px
    &:hover
      @apply bg-gray-200
  .side-menu__item--active
    @apply bg-secondary text-white
    &:hover
      @apply bg-secondary text-white
.side-menu--closing
  position: absolute
</style>