import '@renderer/assets/main.css'
import '@renderer/assets/frame.png'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@renderer/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
