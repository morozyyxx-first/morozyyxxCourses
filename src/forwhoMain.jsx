import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ForWho from './ForWho.jsx'

createRoot(document.getElementById('forwho')).render(
  <StrictMode>
    <ForWho />
  </StrictMode>,
)
