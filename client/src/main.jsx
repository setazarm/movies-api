import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Container from "./context/Container"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Container>
    <App />
  </Container>
)
