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
                            <h1>Glossy Creative IT</h1>
                            <h2>Your Skill Developer</h2>
                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima laboriosam facere totam eum laudantium corporis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;