import useDocumentTitle from '@tanem/use-document-title'
import React from 'react'
import { createRoot } from 'react-dom/client'

const App = ({ title }) => {
  useDocumentTitle(title)
  return <div />
}

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App title="New title" />)
