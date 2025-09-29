import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Calculator.css'
import App from './App.jsx'
import Foodlist from './list.jsx'
import Calcu from './cal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="body">
      <div className="container">
          <Calcu />
      </div>
    </div>
  </StrictMode>,
)
