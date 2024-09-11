import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <ShopContextProvider>
    <Toaster/>
    <App />
    </ShopContextProvider> 
  </React.StrictMode>
);
