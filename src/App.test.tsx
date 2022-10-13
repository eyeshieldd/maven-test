import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

# Nih aku kasih komentar lagi ya
test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
