# project-search

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]

Module to search files in your project

## Install
```bash
$ npm install @htmlacademy/project-search
```

## Usage
```js
const search = require(`@htmlacademy/project-search`);

//  Find all html files in project
search.html('/path/to/your/project').then((files) => {
  files.forEach((file) => {
    console.log(file);
  })
});
```

## API

All methods return a Promise. If the Promise resolves it returns results of search. If promise rejects it returns an error message

- **html**(projectPath) — returns an Array with all `HTML` files in project path
- **css**(projectPath) — returns an Array with all `CSS` files in project path
- **js**(projectPath) — returns an Array with all `JavaScript` files in project path
- **images**(projectPath) — returns an Array with all images in project path. Include `jpeg`, `jpg`, `png`, `gif`, `png`, `svg`, `webp`, `bmp` files;
- **styles**(projectPath) — returns an Array with all files with styles definition. Include `css`, `less`, `sass`, `scss`, `pcss`, `postcss` files;
- **type**(projectPath, type) — returns an Array of all files with `type` extension in project path
- **file**(projectPath, file) — returns one file with name `file` in project path

[npm-image]: https://img.shields.io/npm/v/@htmlacademy/project-search.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@htmlacademy/project-search
[travis-image]: https://travis-ci.org/htmlacademy/project-search.svg?branch=master
[travis-url]: https://travis-ci.org/htmlacademy/project-search
