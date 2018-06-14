// ************************************************************************************************************
// Basic webpack config file
// ************************************************************************************************************

const path = require("path");

const config = {
  // Define entry point
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  module: {    
    rules: [      
      {
        // Linting - enforce style rules when building
        enforce: "pre", // Check sourcefiles before they are modified by other loaders
        test: /(\.js$)|(\.vue$)/, // File extensions, which shall be tested
        loader: "eslint-loader", // Use eslint-loader
        exclude: /node_modules/ // exclude files in the node_modules folder
      },      
      {
        // Vue-File loader
        test: /\.vue$/,
        loader: 'vue-loader'
      },      
      }
    ]
  },
  // If not resolving the vue path, an error will be thrown when loading the page.
  // The error is about using vue in non-compiled areas.
  // Workaround: Add path to vue; not recommended, since it decreases performance.
  // Instead make sure that all components are defined in *.vue files, because they are pre-compiled
  // NOT NEEDED WHEN HAVING VUE-LOADER
  // resolve: {
  //   alias: {
  //     vue: 'vue/dist/vue.js'
  //   }
  // },

  // Define where the distribution files are stored
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  }
};

module.exports = config;
