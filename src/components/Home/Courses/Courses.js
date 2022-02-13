import React from 'react';
import { useSelector } from 'react-redux';
import Course from '../Course/Course';

const Courses = () => {
    // const [courses, setCourses] = useState([]);
    // useEffect(()=> {
    //     fetch('courses.json')
    //     .then(res => res.json())
    //     .then(data => setCourses(data));
    // } ,[])

    const courses = useSelector(state => state.courses.courses);


    return (
        <div id='courses'>
            <h1 className="section-title">Our Courses</h1>
            <div className="container">
                <div className="row g-4">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;