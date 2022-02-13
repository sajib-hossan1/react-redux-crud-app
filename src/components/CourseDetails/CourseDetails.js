import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearCourse, getCourse , addToCart} from '../../redux/features/courseSlice';
import './CourseDetails.css'

const CourseDetails = () => {
    const id = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourse(id))
        return () => {
            dispatch(clearCourse())
        }
    },[])

    const course = useSelector(state => state.courses.course);
    
    const {image, courseName, mentor, price, courseDetails1, courseDetails2, courseDetails3} = course

    return (
        <div className='courseddetails-section container'>
            <div className='text-center mt-4'>
                <img src={image} className="img-fluid" alt="" />
                <br />
                <button onClick={() => dispatch(addToCart(course))} className='btn cart-btn mt-3'>Add To Cart</button>
            </div>
            <h2 className='mt-2'>Course Details of <span>{courseName}</span></h2>
            <h4>Mentor : {mentor}</h4>
            <h4>Price : <span>${price}</span></h4>
            <p>{courseDetails1}</p>
            <p>{courseDetails2}</p>
            <p>{courseDetails3}</p>
        </div>
    );
};

export default CourseDetails;