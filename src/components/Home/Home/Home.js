import React from 'react';
import Banner from '../Banner/Banner';
import ContactWithUs from '../ContactWithUs/ContactWithUs';
import Courses from '../Courses/Courses';
import Discount from '../Discount/Discount';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Courses></Courses>
            <Discount></Discount>
            <Testimonial></Testimonial>
            <ContactWithUs></ContactWithUs>
        </div>
    );
};

export default Home;