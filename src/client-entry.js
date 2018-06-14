// ************************************************************************************************************
// Client entry file
// ************************************************************************************************************

// Retrieve JSON export of the app variable
import { app } from './app'

// Mount Vue instance to an element with id "app"
app.$mount('#app')

// Get the "webpack-hot-middleware" to work: Tell the hot module to stop the hot reloading propagation and flag that everything is loaded correctly
// Supresses the console warning message, when updating a module during runtime:
// "The following modules couldn't be hot updated: (Full reload needed)
// This is usually because the modules which have changed (and their parents) do not know how to hot reload themselves.
// See http://webpack.github.io/docs/hot-module-replacement-with-webpack.html for more details."
// NOT NEEDED WHEN HAVING VUE-LOADER (see webpack.base.config.js)
// if (module.hot) {
//   module.hot.accept()
// }
