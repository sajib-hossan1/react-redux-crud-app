import React from 'react';
import './Banner.css'
import bannerImg from '../../../images/banner-img.png'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-2 d-flex align-items-center justify-content-center">
                        <div className="banner-img">
                            <img src={bannerImg} className='img-fluid me-3' alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="info">
                            <h1>Glossy Creative Agency</h1>
                            <h2>Your Virtual Service Provider</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;