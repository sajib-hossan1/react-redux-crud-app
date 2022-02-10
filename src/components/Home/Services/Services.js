import React from 'react';
import './Services.css'
import service1 from '../../../images/services/service1.png'
import service2 from '../../../images/services/service2.png'
import service3 from '../../../images/services/service3.png'
import service4 from '../../../images/services/service4.png'

const Services = () => {
    return (
        <div className='services-container container'>
            <h1 className='section-title'>Our Services</h1>
            <div className="row g-4">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className='text-center mb-3'>
                        <img src={service1} className='mb-3' alt="" />
                        <h3>Web Stratagy</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className='text-center'>
                        <img src={service2} className='mb-3' alt="" />
                        <h3>UI/UX Design</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className='text-center'>
                        <img src={service3} className='mb-3' alt="" />
                        <h3>Web Design & Development</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-auto">
                    <div className='text-center'>
                        <img src={service4} className='mb-3' alt="" />
                        <h3>Digital Marketing</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;