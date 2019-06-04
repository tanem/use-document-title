import { cleanup, render } from '@testing-library/react'
import * as React from 'react'
import useDocumentTitle from '../src'

const originalDocumentTitle = document.title

afterEach(() => {
  document.title = originalDocumentTitle
  cleanup()
})

it('sets the document title', () => {
  const newTitle = 'New title'
  const C: React.FC<{ title: string }> = ({ title }) => {
    useDocumentTitle(title)
    return <div />
  }

  render(<C title={newTitle} />)

  expect(document.title).toBe(newTitle)
})
