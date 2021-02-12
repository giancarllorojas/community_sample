export default {
  currentBoard(state){
    return state.currentBoard
  },

  currentBoardData(state){
    const category = state.categories.find(s => s.id === state.currentBoard[0])

    if(category != null){
      return category.boards.find(b => b.id === state.currentBoard[1])
    }
    return {}
  },

  categories(state){
    return state.categories
  }
}