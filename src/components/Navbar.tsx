function Navbar(){
    return <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbar-container">
            <a className="navbar-brand" href="#"> <img src="/brasa-site/assets/brasa-logo.png" alt="Brasa Logo" width="66" height="66"/> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="active" id="navbar-title" aria-current="page" href="/brasa-site/index.html">BRASA BERKELEY</a>
                <a className="navbar-text" href="#description">Sobre</a>
                <a className="navbar-text" href="#image-gallery">Posts Recentes</a>
                <a className="navbar-text" href="#faca-parte">Envolva-se</a>
                <a className="navbar-text" href="/brasa-site/Membros/index.html">Membros</a>
                <a className="navbar-text" href="/brasa-site/EmConstrucao/index.html">Recursos</a>
                <a className="navbar-text" href="/brasa-site/EmConstrucao/index.html">Apoie</a>
            </div>
            </div>
        </div>
    </nav>
}

export default Navbar
