const app = Vue.createApp({
  //data, functions
  // template: '<h2>i am the template</h2>'
  data() {
    return {
      url: "https://www.facebook.com",
      showBooks: false,
      title: "The final Empire",
      author: "Brandon anderson",
      age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: true,
        },
        {
          title: "the final empire ",
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(data, e);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book)=> book.isFav)
    }
  }
});

app.mount("#app");
