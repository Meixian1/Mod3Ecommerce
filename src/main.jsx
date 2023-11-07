import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PrimaryProvider from './components/context/primaryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimaryProvider>
      <App />
    </PrimaryProvider>
  </React.StrictMode>,
)
