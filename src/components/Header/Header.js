import React from 'react';
import { useState } from 'react';
import './Header.css'

const Header = () => {
    const [headerBg, setHeaderBg] = useState(false);
    
    const changeBg = () => {
        if(window.innerWidth < 992){
            return;
        }
        if(window.scrollY > 50){
            setHeaderBg(true)
        }
        else {
            setHeaderBg(false)
        }
    };

    window.addEventListener('scroll', changeBg);

    return (
        <div>
            <nav className={headerBg ? "navbar active navbar-expand-lg fixed-top navbar-dark" : "navbar navbar-expand-lg fixed-top navbar-dark" }>

                <div className="container">
                    <a className="navbar-brand" href="#logo">GLOSSY IT</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-links ms-auto">
                            <a className="nav-link" href="#h">Home</a>
                            <a className="nav-link" href="#d">Features</a>
                            <a className="nav-link" href="#f">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;