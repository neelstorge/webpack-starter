const config = require("./webpack.config.js");
const { merge } = require('webpack-merge');

module.exports = function (env) {
  return merge(config("production"));
};