import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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

    const cart = useSelector(state => state.courses.cart)
    console.log(cart);

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
                            <HashLink className="nav-link" to="/home#home">Home</HashLink>
                            <HashLink className="nav-link" to="/home#courses">Courses</HashLink>
                            <HashLink className="nav-link" to="/home#contact">Contact</HashLink>
                            <Link className="nav-link" to="/cart">Cart <sup>{cart.length}</sup></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;