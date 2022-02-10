import React from 'react';
import './Course.css'

const Course = ({course}) => {
    const {courseName, mentor,price,courseDetails1} = course;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
            <div className="course-card">
                <div className="img-box">
                    <img src={course.image} className='img-fluid' alt="" />
                </div>
                <p className='price'>${price}</p>
                <div className="course-info">
                    <h3>{courseName}</h3>
                    <h5>{mentor}</h5>
                    <p>{courseDetails1.slice(0,130)}</p>
                    <button className='purchase-btn btn'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Course;