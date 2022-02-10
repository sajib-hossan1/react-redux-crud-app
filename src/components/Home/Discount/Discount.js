import React from 'react';
import './Discount.css'

const Discount = () => {
    return (
        <div className='discount-container'>
            <div className="discount-details">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Get 50% OFF On Your First Course</h1>
                        </div>
                        <div className="col-md-4 text-center">
                            <button className='btn register-btn'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;