<template>
  <div>
    <Card class="board-header shadow">
      <div class="">
        <div class="flex p-3 md:p-6">
          <h2 v-if="!loading" class="text-xl font-bold">
            <span class="mr-2">
              {{boardData.emoji}}
            </span>
            <span>
              {{boardData.title}}
            </span>
          </h2>
          <div v-if="loading" class="w-2/4 h-8 bg-gray-200 rounded animate-pulse">
            
          </div>
          <div class="flex ml-auto">
            <div class="hidden md:flex mr-2">
              <BtnIcon tooltip="Configurações do Canal" class="mx-1" name="mdiCogOutline"/>
              <Popover v-model="notifyPop" fullWidth>
                <BtnIcon class="mx-1" :name="notificationIcon"/>
                <template #content>
                  <div>
                   <ItemsList @click="onNotifyChange" v-model="notificationStatus" :items="notificationActions"></ItemsList>
                  </div>
                </template>
              </Popover>
              <BtnIcon tooltip="Sobre o canal" class="mx-1" name="mdiInformationOutline"/>
            </div>
            <Modal title="Criar novo tópico">
              <btn :disabled="loading" color="#00E2A6">
                Novo tópico
              </btn>
              <template #content>
                <div>
                  hello
                </div>
              </template>
              <template #actions>
                <div class="flex justify-end">
                  <Btn class="mr-1" color="#F3F4F6" dark>Cancelar</Btn>
                  <Btn color="#00E2A6">Criar tópico</Btn>
                </div>
              </template>
            </Modal>
          </div>
        </div>
        <div class="board-header__bottom px-3 md:px-6 select-none">
          <BtnBadge :loading="loading" @click="activeBadge = 'topics'" :value="activeBadge === 'topics'" :count="10">
            Tópicos
          </BtnBadge>
          <BtnBadge :loading="loading" @click="activeBadge = 'files'" :value="activeBadge === 'files'" :count="10">
            Mídia
          </BtnBadge>
          <BtnBadge v-if="false" @click="activeBadge = 'members'" :value="activeBadge === 'members'" :count="100">
            Membros
          </BtnBadge>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    board: Object,
    loading: Boolean
  },

  data: function(){
    return {
      activeBadge: 'topics',
      notificationStatus: false,
      notifyPop: false,
      notificationActions: [
        {
          text: 'Habilitar Notificações',
          icon: 'mdiBellOutline',
          value: true
        },
        {
          text: 'Desabilitar Notificações',
          icon: 'mdiBellOffOutline',
          value: false
        }
      ]
    }
  },

  methods: {
    onNotifyChange(item){
      this.notificationStatus = item.value
      this.notifyPop = false
    }
  },

  computed: {
    ...mapGetters({
      boardData: 'menu/currentBoardData'
    }),

    notificationIcon(){
      return this.notificationActions.find(n => n.value === this.notificationStatus).icon
    }
  }
}
</script>

<style lang="sass" scoped>
.board-header
  .board-header__bottom
    border-top: 1px solid #d1dceb
</style>