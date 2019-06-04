# use-document-title

[![build status][travis-image]][travis-url]
[![coverage status][codecov-image]][codecov-url]
[![npm version][npmv-image]][npmv-url]
[![npm downloads][npmd-image]][npmd-url]

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

[travis-image]: https://img.shields.io/travis/tanem/use-document-title/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/tanem/use-document-title
[codecov-image]: https://img.shields.io/codecov/c/github/tanem/use-document-title.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/tanem/use-document-title
[npmv-image]: https://img.shields.io/npm/v/use-document-title.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/use-document-title
[npmd-image]: https://img.shields.io/npm/dm/use-document-title.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/use-document-title
