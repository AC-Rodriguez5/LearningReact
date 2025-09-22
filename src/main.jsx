import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Foodlist from './list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="container">
        <App />
      </div>
    {/* <Foodlist /> */}

  </StrictMode>,
)
