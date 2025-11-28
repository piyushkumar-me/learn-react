import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Teame from './contex/Teame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Teame>
          <App />
      </Teame>
    
  
  </StrictMode>,
)
