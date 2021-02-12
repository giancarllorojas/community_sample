<template>
  <div :style="styles" class="res-image w-full h-auto">

  </div>
</template>

<script>
export default {
  props: {
    src: String,
    height: Number,
    backgroundSize: {
      type: String,
      default: () => 'cover'
    }
  },

  computed: {
    styles(){
      return {
        "background-image": `url('${this.src}')`,
        "height": `${this.height}px`,
        "background-size": this.backgroundSize,
        "background-repeat": "no-repeat",
        "background-position": "center center"
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>