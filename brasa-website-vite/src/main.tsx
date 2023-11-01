import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.tsx';
import 'bootstrap/dist/css/bootstrap.css'
import './components/components.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
)
