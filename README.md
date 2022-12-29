# use-document-title

[![npm version][npmv-image]][npmv-url]
[![build status][gh-actions-image]][gh-actions-url]
[![coverage status][codecov-image]][codecov-url]
[![npm downloads][npmd-image]][npmd-url]
[![minzipped size][minzipped-size-image]][minzipped-size-url]

> A React hook that sets the current title of the document.

## Basic Usage

```jsx
import useDocumentTitle from '@tanem/use-document-title'
import React from 'react'
import ReactDOM from 'react-dom'

const App = ({ title }) => {
  useDocumentTitle(title)
  return <div />
}

ReactDOM.render(<App title="New title" />, document.getElementById('root'))
```

## Live Examples

- Basic Usage: [Source](https://github.com/tanem/use-document-title/tree/master/examples/basic-usage) | [Sandbox](https://codesandbox.io/s/github/tanem/use-document-title/tree/master/examples/basic-usage)

## API

**Arguments**

- `title` - The new title of the document.

**Example**

```jsx
useDocumentTitle('New title')
```

## Installation

```
$ npm install @tanem/use-document-title --save
```

There are also UMD builds available via [unpkg](https://unpkg.com/):

- https://unpkg.com/@tanem/use-document-title/dist/use-document-title.umd.development.js
- https://unpkg.com/@tanem/use-document-title/dist/use-document-title.umd.production.js

For the non-minified development version, make sure you have already included:

- [`React`](https://unpkg.com/react/umd/react.development.js)
- [`ReactDOM`](https://unpkg.com/react-dom/umd/react-dom.development.js)

For the minified production version, make sure you have already included:

- [`React`](https://unpkg.com/react/umd/react.production.min.js)
- [`ReactDOM`](https://unpkg.com/react-dom/umd/react-dom.production.min.js)

## License

MIT

[npmv-image]: https://img.shields.io/npm/v/@tanem/use-document-title.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/@tanem/use-document-title
[gh-actions-image]: https://img.shields.io/github/actions/workflow/status/tanem/use-document-title/ci.yml?branch=master&style=flat-square
[gh-actions-url]: https://github.com/tanem/use-document-title/actions?query=workflow%3ACI
[codecov-image]: https://img.shields.io/codecov/c/github/tanem/use-document-title.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/tanem/use-document-title
[npmd-image]: https://img.shields.io/npm/dm/@tanem/use-document-title.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/@tanem/use-document-title
[minzipped-size-image]: https://img.shields.io/bundlephobia/minzip/@tanem/use-document-title?style=flat-square
[minzipped-size-url]: https://bundlephobia.com/result?p=@tanem/use-document-title
