// ************************************************************************************************************
// Extended webpack config file
// ************************************************************************************************************

// Include configuration of the base config
const base = require("./webpack.base.config");

// Extend the base configuration (via the Object.assign method) with property "plugins"
const config = Object.assign({}, base, {
  // If the base configuration does not contain any plugins, initialize plugins with an empty array
  plugins: base.plugins || []
});

// Export the extended config
module.exports = config;
