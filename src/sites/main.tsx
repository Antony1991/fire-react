import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

ReactDom.createRoot(document.getElementById('doc') as HTMLElement).render(
  <App />
)
