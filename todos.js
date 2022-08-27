/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      todos: [],
    };
  },
  methods: {
    // ...
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
    createTodo: function () {
      var params = { userId: 1, title: "this is a title", completed: false };
      axios.post("https://jsonplaceholder.typicode.com/todos", params).then((response) => {
        console.log(response.data);
      });
    },
  },
  beforeMount() {
    this.loadTodos();
  },
};

Vue.createApp(App).mount("#app");
