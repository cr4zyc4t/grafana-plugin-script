# Grafana plugin scripts

Grafana 6 has a big change for developers: from grunt to webpack, and from Angular to React
This plugin work like react-scripts (actually I copy a lot of code from it, thanks those guys who wrote it), which mean it support same features:
- Bundle and compile ESNext JS to ES5 (depend on your browserlist config)
- Support CSS module, SASS, SASS module, PostCSS with autoprefixer
- Support TypeScript (enabled by create tsconfig.json)
- Support Babel macros
- Support Jest test (in progress)

And has some differences:
- Output target will be "amd" instead of "commonJS", because Grafana required that.
- By default, there will be no css output, css will be loaded automatically using style-loader. If you want to extract css output, set env GENERATE_CSS=true. I personally recommend to use <b>styled-components</b> instead.

## How to use
```sh
npm install grafana-plugin-scripts
```
or
```sh
yarn add -D grafana-plugin-scripts
```

Then add scripts to package.json
```
{
  "scripts": {
    ...
    "start": "grafana-scripts start",
    "build": "grafana-scripts build",
    ...
  }
}
```

## Grafana support
If you want to use plugins sdk, just
```
import "grafana/app/plugins/sdk"
```