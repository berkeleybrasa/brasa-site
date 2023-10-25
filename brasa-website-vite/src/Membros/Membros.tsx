import PersonCard from '../components/PersonCard.tsx'
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/components.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <PersonCard title ='Cal Mascot' name = "Oski" image = "../assets/dfr7_4Kn_400x400.jpg" LinkedIn_link = "https://twitter.com/Oski"/>
  </React.StrictMode>,
)
