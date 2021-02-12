import Vue from 'vue'

export default {
  setCurrentBoard(state, value){
    state.currentBoard = value
  },

  closeCategory(state, cat){
    const i = state.categories.findIndex(c => c.id === cat.id)
    Vue.set(state.categories, i, {
      ...cat,
      closed: !cat.closed
    })
  }
}