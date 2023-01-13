import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Normalize } from 'styled-normalize'
import FontStyles from './theme/fonts'
import GlobalStyles from './theme/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Normalize />
    <FontStyles />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
