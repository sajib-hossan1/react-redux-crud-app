import React from 'react';
import './Testimonial.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

import user1 from '../../../images/avatar/1.jpg'
import user2 from '../../../images/avatar/2.jpg'
import user3 from '../../../images/avatar/3.jpg'
import user4 from '../../../images/avatar/4.jpg'

const Testimonial = () => {
    return (
        <div className='testimonial-container container'>
            <h1 className="section-title">Testimonials</h1>
            <Swiper
                autoplay={{
                    delay: 2000,
                }}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper p-4"
            >
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className='text-center'>
                            <img src={user1} className='img-fluid' alt="" />
                        </div>
                        <div className="testimonial-details">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus cum nam velit facere ipsum autem fugiat ipsa tempora! Laudantium mollitia repellendus rerum animi, impedit sint similique ratione a autem, neque quod dolore distinctio iure.</p>
                            <h6>@username</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className='text-center'>
                            <img src={user2} className='img-fluid' alt="" />
                        </div>
                        <div className="testimonial-details">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus cum nam velit facere ipsum autem fugiat ipsa tempora! Laudantium mollitia repellendus rerum animi, impedit sint similique ratione a autem, neque quod dolore distinctio iure.</p>
                            <h6>@username</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className='text-center'>
                            <img src={user3} className='img-fluid' alt="" />
                        </div>
                        <div className="testimonial-details">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus cum nam velit facere ipsum autem fugiat ipsa tempora! Laudantium mollitia repellendus rerum animi, impedit sint similique ratione a autem, neque quod dolore distinctio iure.</p>
                            <h6>@username</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className='text-center'>
                            <img src={user4} className='img-fluid' alt="" />
                        </div>
                        <div className="testimonial-details">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus cum nam velit facere ipsum autem fugiat ipsa tempora! Laudantium mollitia repellendus rerum animi, impedit sint similique ratione a autem, neque quod dolore distinctio iure.</p>
                            <h6>@username</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className='text-center'>
                            <img src={user1} className='img-fluid' alt="" />
                        </div>
                        <div className="testimonial-details">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus cum nam velit facere ipsum autem fugiat ipsa tempora! Laudantium mollitia repellendus rerum animi, impedit sint similique ratione a autem, neque quod dolore distinctio iure.</p>
                            <h6>@username</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className='text-center'>
                            <img src={user2} className='img-fluid' alt="" />
                        </div>
                        <div className="testimonial-details">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus cum nam velit facere ipsum autem fugiat ipsa tempora! Laudantium mollitia repellendus rerum animi, impedit sint similique ratione a autem, neque quod dolore distinctio iure.</p>
                            <h6>@username</h6>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;