/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      otherMessage: "Hello again from JavaScript!",
      newMessage: "",
      hi: ["Hi", "Bonjour", "Hola", "Aloha", "Guten Tag"],
      newHello: "",
      showText: false,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = this.hi[Math.floor(Math.random() * this.hi.length)];
    },
    addHello: function () {
      this.hi.push(this.newHello);
      this.newHello = "";
    },
  },
};

Vue.createApp(App).mount("#app");
