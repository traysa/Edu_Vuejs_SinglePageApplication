// ************************************************************************************************************
// Express Webserver
// ************************************************************************************************************

const express = require('express');
const app = express();
// Filesystem node module
const fs = require("fs");
const path = require("path");

// Return data from the index page
const indexHTML= (() => {
  // With path.resolve you get the relative path to the current server.js file location from the directory the script is run
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

// Return all static modules from the dist folder
app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

// Extend server with the modules defined in the dev-server file
require("./build/dev-server")(app);

// Event handler for all GET-requests (* = no specific path)
app.get('*', (req, res) => {
  res.write(indexHTML);
  res.end();
})

// Run application on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
