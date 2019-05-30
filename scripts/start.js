const webpack = require("webpack");
const fs = require("fs-extra");

const paths = require("../configs/paths");
const utils = require("../configs/utils");

// Set NODE_ENV before anything else
process.env.NODE_ENV = "development";
process.env.BABEL_ENV = "development";

fs.emptyDirSync(paths.appDist);
const compiler = webpack(require("../configs/webpack.config"));
const watchOptions = {
  ignored: /node_modules/,
};
compiler.watch(watchOptions, utils.webpackOutputFormatter);