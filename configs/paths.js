const fs = require("fs");
const path = require("path");
const url = require("url");

function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith("/");
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  }
  return inputPath;
}

const envPublicUrl = process.env.PUBLIC_URL;
const getPublicUrl = appJson => envPublicUrl || `public/plugins/${require(appJson).id}`;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appJson) {
  const publicUrl = getPublicUrl(appJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : "/");
  return ensureSlash(servedUrl, true);
}

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: appDirectory,
  dotenv: resolveApp(".env"),
  appDist: resolveApp("dist"),
  appSrc: resolveApp("src"),
  appJson: resolveApp("src/plugin.json"),
  appTsConfig: resolveApp("tsconfig.json"),
  appJsConfig: resolveApp("jsconfig.json"),
  appNodeModules: resolveApp("node_modules"),
  appEntry: resolveApp("src/module"),
  publicUrl: getPublicUrl(resolveApp("package.json")),
  servedPath: getServedPath(resolveApp("src/plugin.json")),
};