// ************************************************************************************************************
// Setup Dev server
// For easier development, 2 middleware are added:
// "webpack-dev-middleware" - Distribution files (in dist folder) are not created on disk, but in memory. Everytime a module is updated, the module is rebuilt automatically. So no need for stopping the server, run webpack to re-generate the distribution files and then start the server again.
// "webpack-hot-middleware" - The section, which got updated, will get automatically reloaded in the browser. No need for refreshing the browser after a change, since the change is automatically reloaded.
// ************************************************************************************************************

// Include webpack
const webpack = require("webpack");
// Include extended webpack configuration
const clientConfig = require("./webpack.client.config");

// Export a function, which will receive the express app
module.exports = function setupDevServer(app) {

  // Step 1 to get the "webpack-hot-middleware" to work:
  // Extend the webpack config with a new entry point called "webpack-hot-middleware/client";
  // Will connect to the server to receive notifiations when the bundle rebuilts and then update the client bundle accordingly
  clientConfig.entry.app = [
    "webpack-hot-middleware/client",
    clientConfig.entry.app
  ];

  // Step 2 to get the "webpack-hot-middleware" to work:
  // Push 2 new plugins to the webpack configuration
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );

  // Instatiate webpack with the webpack configuration
  const clientCompiler = webpack(clientConfig);

  // Extend express application with "webpack-dev-middleware"
  app.use(
    require("webpack-dev-middleware")(clientCompiler, {
      stats: {
        colors: true
      }
    })
  );

  // Extend express application with "webpack-hot-middleware"
  app.use(require("webpack-hot-middleware")(clientCompiler));

};
