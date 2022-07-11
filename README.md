
<img src="https://github.com/Sas2k/Zap/raw/main/docs/static/img/ZAP!-logo.png" width=128 height=128 />

[![Discord](https://img.shields.io/discord/993166600448520242?color=purple&label=Discord&style=for-the-badge)](https://discord.gg/MB2kR2Hh9Z)
# Zap! ⚡
A light-weight Terminal API Client. built with Node.js

## Installation

npm
```bash
npm install -g zap-client
```

## Features

- Get
- Post
    - json (default)
    - xml
    - text
    - form
- Delete
- Verboosity
- Put
  - json (default)
  - xml
  - text
  - form
- Formatted Outputs and Errors
- Downloading Outputs and Files

## Demo

![demo](https://github.com/Sas2k/Zap/raw/main/Media/demo_2.gif)

## Examples

A simple `get` request
```bash
npx zap-client get https://jsonplaceholder.typicode.com/posts/100
```

Another simple `post` request
```bash
npx zap-client post https://jsonplaceholder.typicode.com/posts/ json '{\"title\":\"Hello\",\"body\":\"World!\"}'
```

## Documentation

[Documentation](https://sas2k.github.io/Zap/docs/build)


## Badges

![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?color=blue&style=for-the-badge)
![NPM Install](https://img.shields.io/npm/dw/zap-client?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/sas2k/Zap?color=blue&style=for-the-badge)
## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@Sas2k](https://www.github.com/sas2k)

