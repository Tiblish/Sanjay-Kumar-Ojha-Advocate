import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdvocateApp from './AdvocateApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdvocateApp />
  </StrictMode>,
)
