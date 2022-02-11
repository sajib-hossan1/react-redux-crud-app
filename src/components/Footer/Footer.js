import React from 'react';
import './Footer.css'
import playStoreImg from '../../images/footer/play-sotre.png'
import ssl from '../../images/footer/ssl.png'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='container'>
                <div className="row g-4">
                    <div className='col-md-4 col-sm-12'>
                        <h1 className="brand-title">Glossy IT</h1>
                        <div className="contact-info">
                            <address><i className="fas fa-map-marker-alt"></i> Address : 32/B, Dhanmondi, Dhaka, Bangladesh</address>
                            <p><i className="fas fa-envelope"></i> E-mail us : glossy@it.com</p>
                            <p><i className="fas fa-phone-alt"></i> Phone : 0123456789</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="app-download">
                            <h4>Get Our App On Google Play Store</h4>
                            <a href="#playStore"><img src={playStoreImg} alt="play-store-icon" /></a>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="payment-method">
                            <h4>Our Payment Method</h4>
                            <img className="img-fluid" src={ssl} alt="play-store-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-text">
                <p>Copyright &copy; 2021 Md. Sajib Hossan</p>
            </div>
        </div>
    );
};

export default Footer;