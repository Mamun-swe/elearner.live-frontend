import React from 'react';
import "../styles/reviews.scss";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_star, ic_star_half } from 'react-icons-kit/md';
import { thickRight } from 'react-icons-kit/iconic/thickRight'
import LaptopImg from '../../assets/static/laptop.png';
import MobileImg from '../../assets/courses/mobile.png';


const Reviews = ({ reviews }) => {
    const reviewSlider = React.useRef();

    const next = () => {
        reviewSlider.current.slickNext()
    }

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };


    return (
        <div className="reviews">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <div className="header">
                            <h1 data-aos="fade-left">টপ রিভিউ কুড়ানো কোর্সগুলো</h1>
                            <img data-aos="fade-down" src={LaptopImg} className="img-fluid" alt="..." />
                        </div>
                    </div>
                    <div className="col-12 slider-column mt-lg-5">

                        <Slider ref={reviewSlider} {...settings}>
                            {reviews.length > 0 && reviews.map((review, i) =>
                                <div className="card shadow-sm review-card" key={i} data-aos="fade-left">
                                    <div className="d-lg-flex">
                                        <div className="custom-flex shadow-lg content">
                                            <div className="d-flex mb-2">
                                                <div>
                                                    <img src={MobileImg} className="img-fluid" alt=".." />
                                                </div>
                                                <div className="p-2">
                                                    <h3 className="mb-1 mt-3">4.9<span className="text-muted">/5.0</span></h3>
                                                    <Icon icon={ic_star} size={25} />
                                                    <Icon icon={ic_star} size={25} />
                                                    <Icon icon={ic_star} size={25} />
                                                    <Icon icon={ic_star_half} size={25} />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <h5 className="mb-0">অ্যান্ড্রয়েড ডেভেলপমেন্ট - জাভা</h5>
                                                <p className="mb-0">ক্লাশ সংখ্যা : ১৫ টি</p>
                                                <h4 className="mb-0">
                                                    <del className="text-muted">৫৫০০</del> ৪০০০ /= মাত্র
                                                </h4>
                                                <Link to="/" type="button" className="btn shadow-none text-white">কোর্সটি করব</Link>
                                            </div>
                                        </div>
                                        <div className="custom-flex">
                                            <div className="comment-box px-3 py-4">
                                                <p className="comment">" অনেক কিছু শিখতে পারলাম ভাই, স্পেশালীভাবে ক্লাসের রিভিউ ভিডিও গুলো অনেক help করেছ pratices এর সময়। ধন্যবাদ ভাইয়্যা এই রকম একটা কোর্সের জন্য । "</p>

                                                <div className="text-right comment-user">
                                                    <p className="text-capitalize name mb-0">mamun</p>
                                                    <p className="text-capitalize title mb-0">software engineer</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>

                        <button
                            type="button"
                            className="btn next-btn shadow rounded-circle"
                            data-aos="fade-right"
                            onClick={next}
                        >
                            <Icon icon={thickRight} size={30} />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;