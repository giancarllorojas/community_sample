<template>
  <div>
    <div class="pb-20">
      <Navi/>
    </div>
    <div v-if="currentUser !== null">
      <Nuxt />
    </div>
    <Landing v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Landing from '../components/Landing/Landing.vue'

export default {
  components: { Landing },
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser'
    })
  }
}
</script>

<style lang="sass">
body
  font-size: 14px
  min-height: 100vh
  font-weight: 500
  -webkit-font-smoothing: antialiased
  color: rgba(0,0,0,0.9)
  background-color: #FAFAFA

.modal-open
  overflow: hidden

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active
  transition-duration: 0.2s
  transition-property: height, opacity, transform
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1)
  overflow: hidden !important

.slide-left-enter,
.slide-right-leave-active
  opacity: 0
  transform: translate(0, 0)

.slide-left-leave-active,
.slide-right-enter
  opacity: 0
  transform: translate(0, 0)
</style>