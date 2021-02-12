<template>
  <div class="navi bg-white shadow mb-8">
    <div class="container h-full">
      <div class="flex items-center h-full navi-bar px-4 md:px-0">
        <nuxt-link to="/" class="flex items-center mr-10">
          <div>
            <img src="/logo.svg"/>
          </div>
          <span class="text-primary font-black text-2xl">
            ADUO
          </span>
        </nuxt-link>
        <div v-if="currentUser !== null" class="w-full ml-auto flex items-center font-medium">
          <div class="hidden md:flex w-full mr-4 justify-end items-center">
            <div class="navi__search">
              <TextInput hide-messages ref="search" v-if="searching" placeholder="Digite sua busca"></TextInput>
            </div>
            <BtnIcon link to="/configuracoes" class="mx-2" name="mdiCogOutline"/>
            <BtnIcon class="" name="mdiBellOutline"/>
            <BtnIcon v-if="false" class="mx-2" name="mdiForumOutline"/>
          </div>
          <div @click="menu = !menu" class="ml-auto self-start navi-profile cursor-pointer">
            <img :src="avatar"/>
          </div>
        </div>
        <div class="ml-auto flex" v-else>
          <Modal v-model="signinModal" :maxWidth="350" title="Acessar Aduo">
            <Btn textColor="#00E2A6">
              Entrar
            </Btn>
            <template #content>
              <div class="signin">
                <TextInput label="E-mail"/>
                <TextInput label="Senha" type="password"/>
              </div>
            </template>
            <template #actions>
              <div class="flex justify-end">
                <Btn @click="signinModal = false" class="mr-1" textColor="#33404F" dark>Cancelar</Btn>
                <Btn color="#00E2A6">Entrar</Btn>
              </div>
            </template>
          </Modal>
          <Btn color="#00E2A6">
            Quero fazer parte
          </Btn>
        </div>
      </div>
    </div>
    <div v-if="false" class="container">
      <Tabs v-model="tab" @input="$router.push(tabs[tab].to)" :tabs="tabs"/>
    </div>
    <!-- <NaviMenu v-model="menu">
      <div>
        User menu will be placed here
      </div>
    </NaviMenu> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "NavBar",
  data: function(){
    return {
      tab: 0,
      searching: true,
      menu: false,
      signinModal: false,
      tabs: [
        {
          name: 'Geral',
          to: '/'
        },
        {
          name: 'Produtos',
          to: '/produtos'
        },
        {
          name: 'Clientes',
          to: '/clientes'
        },
        {
          name: 'Saques',
          to: '/saques'
        },
        {
          name: 'Configurações',
          to: '/configuracoes'
        }
      ],
      avatar: 'https://vercel.com/api/www/avatar/e2e9b6b3a62c56f9d3fe54f83e05a14f85a5a8ef?s=60'
    }
  },

  methods: {
    switchSearch(){
      this.searching = !this.searching

      if(this.searching){
        this.$nextTick(() => {
          'refs', this.$refs.search.$el.focus()
        })
      }
    }
  },

  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser'
    })
  }
}
</script>

<style lang="sass" scoped>
.navi
  border-bottom: 1px solid #d1dceb
  z-index: 10
  height: 50px
  @apply fixed w-full
  .navi-bar
    img
      width: 40px
  .navi-profile
    img
      width: 32px
      height: 32px
      border-radius: 100%
  .navi__search
    max-width: 400px
    width: 100%
    @apply mx-auto
</style>