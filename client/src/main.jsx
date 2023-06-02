import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx.js'
import './style/index.css'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppProvider } from './components/Context'
ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
  
<App />

   </AppProvider>
</BrowserRouter>
   
  
  </React.StrictMode>,
)