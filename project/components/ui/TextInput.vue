<template>
  <div class="text-field">
    <div class="text-field__container flex flex-col">
      
      <span v-if="label" class="text-field__label mb-1">
        {{label}}
      </span>
      <span class="text-gray-600">
        {{sublabel}}
      </span>
      <div class="text-field__inputcontainer">
        <div @click="$refs.input.focus()" v-if="!!icon" class="text-field__icon">
          <v-mdi :class="{'text-primary': focused}" :name="icon"></v-mdi>
        </div>
        <input ref="input" :class="{'text-field--hasvalue': !!value, 'text-field--hasicon': !!icon}" v-bind="$attrs" v-on="$listeners" :value="value" @input="onInput" @focus="focused = true" @blur="focused = false"/>
        <div v-if="!!$slots['append-left']" class="inputcontainer__leftslot">
          <slot name="append-left"/>
        </div>
      </div>
    </div>
    <div v-if="!hideMessages" class="text-field__messages">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    sublabel: String,

    value: {
      type: String,
      default: () => ''
    },

    hideMessages: Boolean,
    
    icon: String
  },

  data: function(){
    return {
      focused: false,
      model: ''
    }
  },

  methods: {
    onInput(v){
      this.$emit('input', v.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
.text-field
  position: relative
  @apply rounded-lg outline-none
  .text-field__container
    input
      height: 32px
      transition: all 150ms ease-in-out
      padding-left: 42px
      font-weight: 500
      @apply border-2 w-full bg-gray-100 rounded-lg outline-none px-4

      &:hover
        @apply bg-white
      &:focus
        @apply bg-white border-secondary
    .text-field--hasvalue
      @apply bg-white
    .text-field--hasicon
      @apply pl-12
    .text-field__label
      @apply font-bold text-xs
    .text-field__icon
      position: absolute
      left: 12px
      .mdi-icon
        transition: all 150ms ease-in-out
    .text-field__inputcontainer
      @apply flex items-center
      .inputcontainer__leftslot
        @apply ml-4
  .text-field__messages
    height: 16px
    width: 100%
</style>