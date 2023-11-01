function Navbar(){
    return <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbar-container">
            <a className="navbar-brand" href="#"> <img src="../assets/brasa-logo.png" alt="Brasa Logo" width="66" height="66"/> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="active" id="navbar-title" aria-current="page" href="../index.html">BRASA BERKELEY</a>
                <a className="navbar-text" href="../EmConstrucao/index.html">Sobre</a>
                <a className="navbar-text" href="../EmConstrucao/index.html">Eventos</a>
                <a className="navbar-text" href="../EmConstrucao/index.html">Envolva-se</a>
                <a className="navbar-text" href="../Membros/index.html">Membros</a>
                <a className="navbar-text" href="../EmConstrucao/index.html">Recursos</a>
                <a className="navbar-text" href="../EmConstrucao/index.html">Apoie</a>
            </div>
            </div>
        </div>
    </nav>
}

export default Navbar