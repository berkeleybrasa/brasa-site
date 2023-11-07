import React from 'react'
import Navbar from '../components/Navbar.tsx'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/components.css'
import './construction.css'
import './construction.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <div className='construction-container-master'>
        <div className='construct-image-container'> <img id = 'construction-image' src='brasa-site/assets/under construction.png' alt = 'Under construction Icon. Source: Freepik'/></div>
        <div className='construction-text-container'>
            <p className='construction-title'>Erro: página em construção</p>
            <p className='construction-text'>Ainda não é possível acessar essa parte do site da Brasa Berkeley.
            Para voltar à página inicial, clique <a id='homepage-link' href="../index.html">aqui</a>.
            </p>
        </div>
    </div>
  </React.StrictMode>,
)
