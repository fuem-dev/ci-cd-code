/// <reference types="vitest" />
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders main title', () => {
  render(<App />)
  expect(screen.getByText(/CI\/CD Code/i)).toBeInTheDocument()
})
