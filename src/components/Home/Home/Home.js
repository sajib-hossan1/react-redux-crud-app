import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Courses></Courses>
        </div>
    );
};

export default Home;