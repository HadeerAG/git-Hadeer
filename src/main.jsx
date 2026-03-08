import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './../node_modules/fontawesome-free/css/all.min.css'
import "./../node_modules/fontawesome-free/css/all.css"
import AuthContextProvider from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    <App />
   

  </StrictMode>,
)
