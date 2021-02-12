<template>
  <div class="config container">
    <div class="config-side mr-10">
      
      <ul>
        <div v-for="(opt,i) in options" :key="i">
          <span v-if="opt.category" class="font-black uppercase tracking-wider p-1">{{opt.name}}</span>
          <nuxt-link v-else :to="opt.to">
            <li :class="{'config--active': $route.path === opt.to}" class="cursor-pointer hover:bg-gray-200 transition-colors mt-1 flex font-bold side-menu__item px-2 py-1 rounded-md">
              {{opt.name}}
            </li>
          </nuxt-link>
        </div>
      </ul>
    </div>
    <Card class="config-content w-full">
      <div>
        <nuxt-child/>
        <div class="config-actions bg-gray-100 flex py-3 px-3 justify-end">
          <btn color="#00E2A6">Salvar</btn>
        </div>
      </div>
    </Card>

  </div>
</template>

<script>
export default {
  data: function(){
    return {
      options: [
        {
          name: 'Comunidade',
          category: true
        },
        {
          name: 'Geral',
          to: '/configuracoes/geral'
        },
        {
          name: 'Senha',
          to: '/configuracoes/senha'
        }
      ]
    }
  },
  mounted(){
    console.log(this.$route.path)
  }
}
</script>

<style lang="sass" scoped>
.config
  @apply flex w-full
  .config-side
    width: 240px
    min-width: 240px
  .config--active
    @apply bg-secondary text-white
</style>