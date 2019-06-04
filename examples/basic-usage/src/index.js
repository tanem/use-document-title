import useDocumentTitle from '@tanem/use-document-title'
import React from 'react'
import ReactDOM from 'react-dom'

const App = ({ title }) => {
  useDocumentTitle(title)
  return <div />
}

ReactDOM.render(<App title="New title" />, document.getElementById('root'))
