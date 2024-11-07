import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
    <Toaster
      position="bottom-right"
      toastOption = {{
        style:{
          background:"#000000",
          color:"#ffffff",
        },
      }}   
    />
  </BrowserRouter>
)
