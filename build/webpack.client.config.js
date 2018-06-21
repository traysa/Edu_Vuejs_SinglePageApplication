// ************************************************************************************************************
// Extended webpack config file
// ************************************************************************************************************

// Include configuration of the base config
const base = require("./webpack.base.config");

// Include Extract text webpack plugin module
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Extend the base configuration (via the Object.assign method) with property "plugins"
const config = Object.assign({}, base, {
  // If the base configuration does not contain any plugins, initialize plugins with an empty array
  plugins: base.plugins || []
});

config.module.rules
              .filter(x => {return x.loader == 'vue-loader'})
              .forEach(x => x.options.extractCSS = true)

// Include extract text plugin into the config
// Sets the file, in which styles should be stored
config.plugins.push(
  new ExtractTextPlugin('assets/styles.css')
)

// Export the extended config
module.exports = config;
