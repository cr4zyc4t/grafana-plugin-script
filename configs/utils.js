/* eslint-disable no-console */
const chalk = require("chalk");

function printBuildError(err) {
  const message = err != null && err.message;
  const stack = err != null && err.stack;

  // Add more helpful message for Terser error
  if (
    stack &&
    typeof message === "string" &&
    message.indexOf("from Terser") !== -1
  ) {
    try {
      const matched = /(.+)\[(.+):(.+),(.+)\]\[.+\]/.exec(stack);
      if (!matched) {
        throw new Error("Using errors for control flow is bad.");
      }
      const problemPath = matched[2];
      const line = matched[3];
      const column = matched[4];
      console.log(
        "Failed to minify the code from this file: \n\n",
        chalk.yellow(
          `\t${problemPath}:${line}${column !== "0" ? `:${column}` : ""}`
        ),
        "\n"
      );
    } catch (ignored) {
      console.log("Failed to minify the bundle.", err);
    }
    console.log("Read more here: https://bit.ly/CRA-build-minify");
  } else {
    console.log(`${message || err}\n`);
  }
  console.log();
};

function clearConsole() {
  process.stdout.write("\x1Bc");
}

const webpackOutputFormatter = function (err, stats) {
  if (err) {
    printBuildError(err);
    return;
  }

  clearConsole();
  console.log(chalk.green("Compile success!"));
  console.log(stats.toString({
    assets: true,
    cached: false,
    children: false,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: true,
    modules: false,
    reasons: false,
    source: false,
    timings: true,
    version: false,
    entrypoints: false,
  }));
  console.log();
};

module.exports = {
  webpackOutputFormatter,
};
