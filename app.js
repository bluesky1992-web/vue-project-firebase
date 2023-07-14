const app = Vue.createApp({
  //data, functions
  // template: '<h2>i am the template</h2>'
  data() {
    return {
      showBooks: false,
      title: "The final Empire",
      author: "Brandon anderson",
      age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "The Hitchhiker's Guide to the Galaxy",
          author: "Douglas Adams",
        },
        {
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
        },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
        },
        {
          title: "Pride and Prejudice",
          author: "Jane Austen",
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
  },
});

app.mount("#app");
