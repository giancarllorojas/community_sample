<template>
  <div class="w-full">
    <span class="editor__label font-bold">
      {{label}}
    </span>
    <editor-menu-bar v-if="!hideMenu" :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar flex">

        <btn type="icon"
          class="menubar__button"
          :class="{ 'bg-gray-400': isActive.bold() }"
          @click="commands.bold"
        >
          <Icon name="mdiFormatBold"/>
        </btn>

        <btn type="icon"
          class="menubar__button"
          :class="{ 'bg-gray-400': isActive.italic() }"
          @click="commands.italic"
        >
          <Icon name="mdiFormatItalic"/>
        </btn>

        <btn type="icon"
          class="menubar__button"
          :class="{ 'bg-gray-400': isActive.strike() }"
          @click="commands.strike"
        >
          <Icon size="20" name="mdiFormatStrikethroughVariant"/>
        </btn>

        <btn type="icon"
          class="menubar__button"
          :class="{ 'bg-gray-400': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </btn>

        <btn type="icon"
          class="menubar__button"
          :class="{ 'bg-gray-400': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </btn>
      </div>
    </editor-menu-bar>
    <editor-content class="editor" :class="{'bg-gray-100': !focused, 'editor--focused': focused}" :onUpdate="onEditorUpdate" :style="{'text-align': data.align}" :editor="editor" />
  </div>
</template>

<script>
// Import the editor
import { Editor, EditorContent, EditorMenuBar  } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Placeholder
} from 'tiptap-extensions'

export default {
  props: {
    value: String,
    label: String,
    placeholder: String,
    hideMenu: Boolean
  },

  components: {
    EditorContent,
    EditorMenuBar 
  },

  data() {
    return {
      editor: null,
      menu: false,
      focused: false,
      currentUrl: '',
      data: {
        html: '',
        align: 'left'
      }
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
        new Placeholder({
          emptyEditorClass: 'is-editor-empty',
          emptyNodeClass: 'is-empty',
          emptyNodeText: this.placeholder,
          showOnlyWhenEditable: false,
          showOnlyCurrent: false,
        }),
      ],
      content: '',
      onUpdate: this.onEditorUpdate,
      onFocus: () => this.focused = true,
      onBlur: () => this.focused = false
    })
  },

  methods: {
    getCurrentUrl(urlData){
      if(!!urlData && urlData !== null && !!urlData.href){
        this.currentUrl = urlData.href
      }
    },

    applyLink(command, url){
      command({ href: url })

      this.currentUrl = ''

      this.menu = false
    },

    onEditorUpdate(c){
      console.log(c.getJSON())
      this.$emit('input', c.getHTML())
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="sass">
.ProseMirror
  outline: #00E2A6 auto 1px
  padding: 6px 20px
  @apply outline-none w-full
.menubar__button
  @apply font-bold mr-1 mb-1
.editor
  border: 2px solid #E2E8F0
  transition: all 150ms ease-in-out
  
  @apply rounded-lg
  &:hover
    cursor: text
    @apply bg-white

  h2
    font-size: 28px
  h3
    font-size: 22px
.editor--focused
  border-color: #00E2A6 !important
.editor p.is-editor-empty:first-child::before
  content: attr(data-empty-text)
  float: left
  color: #A0AECA
  pointer-events: none
  height: 0
</style>