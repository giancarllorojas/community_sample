export default () => ({
  currentBoard: [],
  categories: [
    {
      id: 1,
      title: 'General',
      boards: [{
        id: 1,
        title: 'Say Hello',
        emoji: '👏',
        slug: 'say-hello'
      },
      {
        id: 2,
        title: 'Finance',
        emoji: '💰',
        slug: 'finance'
      },
      {
        id: 3,
        title: 'Education',
        emoji: '🏫',
        slug: 'education'
      }]
    },

    {
      id: 2,
      title: 'Diversão',
      boards: [{
        id: 1,
        title: 'Diga oi',
        emoji: '👏',
        slug: 'diga-oi'
      },
      {
        id: 2,
        title: 'Diga oi',
        emoji: '👏',
        slug: 'diga-oi'
      }]
    }
  ]
})