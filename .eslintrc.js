// ************************************************************************************************************
// Javascript Linting configuration
// ************************************************************************************************************

module.exports = {
  // Set this file as the parent scope of the rules, so rules apply to all files of the project
  root: true,
  // Add babel linting parser
  parser: 'babel-eslint',
  // Set parsing options to modules, since ECMA modules are used
  parserOptions: {
    sourceType: 'module'
  },
  // Extend the standard rule configuration
  // Standard rule configuration: https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // Include HTML plugin to lint (scripts from html files)
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
