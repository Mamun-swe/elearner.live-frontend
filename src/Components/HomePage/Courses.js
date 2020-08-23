import React from 'react';
import '../styles/courses.scss';
import Slider from 'react-slick';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left, ic_keyboard_arrow_right } from 'react-icons-kit/md';
import mobileImg from '../../assets/courses/mobile.png';
import { Link } from 'react-router-dom';

const Courses = ({ courses }) => {
    const customeSlider = React.useRef();

    const next = () => {
        customeSlider.current.slickNext()
    }
    const previous = () => {
        customeSlider.current.slickPrev()
    }

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="courses">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-4 mb-lg-5">
                        <h1 data-aos="fade-left">আমাদের কোর্স সমূহ</h1>
                    </div>
                    <div className="col-12 slider-column">
                        <Slider ref={customeSlider} {...settings}>
                            {courses.length > 0 && courses.map((course, i) =>
                                <div className="card" key={i}>
                                    <div className="card-body shadow">
                                        <img src={mobileImg} className="img-fluid" alt="..." />
                                        <h5>মোবাইল অ্যাপ ডেভেলপমেন্ট</h5>
                                        <p>বর্তমান ফ্রিল্যান্সিং মার্কেটপ্লেসের সবচেয়ে জনপ্রিয় কাজগুলোর ভিতর একটি। সবচেয়ে সাশ্রয়ীমূল্য Android,ISO,Hybrid ডিজাইন অথবা ডেভেলপমেন্ট কোর্সগুলো করতে </p>
                                        <div className="text-right">
                                            <Link to="/" type="button" className="btn btn-sm shadow-none">
                                                এখানে ক্লিক করুন
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>

                        <button
                            type="button"
                            className="btn rounded-circle shadow-none prev-btn"
                            onClick={previous}
                        >
                            <Icon
                                size={30}
                                icon={ic_keyboard_arrow_left}
                                style={{ color: '#fff' }}
                            />
                        </button>

                        <button
                            type="button"
                            className="btn rounded-circle shadow-none next-btn"
                            onClick={next}
                        >
                            <Icon
                                size={30}
                                icon={ic_keyboard_arrow_right}
                                style={{ color: '#fff' }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;