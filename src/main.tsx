import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const container = document.getElementById('root')

ReactDOM.createRoot( container as HTMLElement).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
)
