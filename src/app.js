// ************************************************************************************************************
// Vue application
// ************************************************************************************************************

// Import vue
import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'hello there!'
  },
  template: '<div id="app">{{hello}}</div>'
})

// JSON export of the app variable
export { app }
