import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Normalize } from 'styled-normalize'
import FontStyles from './theme/fonts'
import GlobalStyles from './theme/globalStyles'
import { Provider } from 'react-redux'
import { store } from './services'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <FontStyles />
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
)
