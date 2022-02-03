import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="#logo">Navbar</a>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#Home">Home</a>
                        <a className="nav-link" href="#a">Features</a>
                        <a className="nav-link" href="#b">Pricing</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;