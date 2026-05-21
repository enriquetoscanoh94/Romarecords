import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './card.css'
import CardPage from './CardPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardPage />
  </StrictMode>
)
