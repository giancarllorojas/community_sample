<template>
  <div @keyup.esc="open = false" class="modal-container">
    <div @click="open = true" class="modal-activator">
      <slot/>
    </div>
    <div v-show="open" class="modal">
      <div v-if="open" @click="open = false" class="modal-backdrop">

      </div>
      <div v-if="open" :class="{'modal-content--nomobilemargin': noMobileMargins}" class="modal-content w-full shadow-2xl" :style="{'max-width': `${maxWidth}px`}">
        <Card class="shadow-xl">
          <div class="modal-title py-2 px-3">
            <h3 class="relative font-bold text-center text-lg text-primary">
              {{title}}
              <BtnIcon @click="open = false" class="absolute top-0 right-0" name="mdiCloseCircleOutline"/>
            </h3>
            
          </div>
          <div class="modal-body p-3 md:p-6">
            <slot name="content"/>
          </div>
          <div v-if="!!$slots.actions" class="modal-actions px-3 py-2">
            <slot name="actions"/>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { FadeTransition, ZoomCenterTransition } from 'vue2-transitions'

export default {
  props: {
    title: String,
    value: Boolean,
    noMobileMargins: Boolean,
    maxWidth: {
      type: Number,
      default: () => 500
    }
  },

  watch: {
    open(v){
      this.$emit('input', v)
      if(v){
        document.body.classList.add("modal-open");
      }else{
        document.body.classList.remove("modal-open");
      }
    },

    value(v){
      this.open = !!v
    }
  },

  data: function(){
    return {
      open: false
    }
  },

  components: {
    FadeTransition,
    ZoomCenterTransition
  }
}
</script>

<style lang="sass" scoped>
.modal
  z-index: 10
  top: 0
  left: 0
  @apply fixed w-screen h-screen max-h-screen flex items-start justify-center
  .modal-backdrop
    backdrop-filter: blur(8px)
    background-color: rgba(0,0,0,0.75)
    @apply w-full h-full overflow-hidden transition-all absolute
  .modal-content
    z-index: 5
    @apply relative mt-20
    .modal-body
      overflow: auto
    .modal-title
      border-bottom: 1px solid #d1dceb
    .modal-actions
      border-top: 1px solid #d1dceb
      @apply bg-gray-100

  @media screen and (max-width: 960px)
    .modal-content--nomobilemargin
      max-width: calc(100vw - 10px) !important
      @apply my-auto mx-auto
      .modal-body
        max-height: calc(100vh - 113px)
        overflow: auto
</style>