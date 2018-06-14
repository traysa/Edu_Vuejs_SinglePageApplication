// ************************************************************************************************************
// Vue application
// ************************************************************************************************************

// Import vue
import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

const app = new Vue({
  ...AppLayout
})

// JSON export of the app variable
export { app }
