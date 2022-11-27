const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', isFav: true }
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter( (b) => b.isFav == true );
    }
  }
})

app.mount('#app')