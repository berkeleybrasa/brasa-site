import PersonCard from '../components/PersonCard.tsx'
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/components.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <PersonCard title ='Co-President' name = "Ana Catharina Resende Quartiero" image = "/brasa-site/assets/foto-caca.png" LinkedIn_link = "linkedin.com/in/catharina-quartiero"/>
    <PersonCard title ='Co-President' name = "Oski" image = "/brasa-site/assets/oski.jpg" LinkedIn_link = "linkedin.com/"/>
  </React.StrictMode>,
)
