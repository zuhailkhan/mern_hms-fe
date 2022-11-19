import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

const container = document.getElementById('root')

ReactDOM.createRoot( container as HTMLElement).render(
  <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
