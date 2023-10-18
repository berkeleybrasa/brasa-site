function Navbar(){
    return <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"> <img src="src/components/brasa-logo.png" alt="Brasa Logo" width="66" height="66"/> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="active" id="navbar-title" aria-current="page" href="#">BRASA BERKELEY</a>
                <a className="navbar-text" href="#">Sobre</a>
                <a className="navbar-text" href="#">Eventos</a>
                <a className="navbar-text" href="#">Envolva-se</a>
                <a className="navbar-text" href="#">Membros</a>
                <a className="navbar-text" href="#">Recursos</a>
                <a className="navbar-text" href="#">Apoie</a>
            </div>
            </div>
        </div>
    </nav>;
}

export default Navbar