import React from 'react';
import '../styles/courses.scss';
import Slider from 'react-slick';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left, ic_keyboard_arrow_right } from 'react-icons-kit/md';
import { Link } from 'react-router-dom';

const Courses = ({ sections }) => {
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

    const onSlice = data => {
        if (data) {
            return data.slice(0, 83) + "..."
        } else {
            return null
        }
    }



    return (
        <div className="courses">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-4 mb-lg-5">
                        <h1 data-aos="fade-left">আমাদের কোর্স সমূহ</h1>
                    </div>
                    <div className="col-12 slider-column">
                        <Slider ref={customeSlider} {...settings}>
                            {sections.length > 0 && sections.map((section, i) =>
                                <div className="card" key={i}>
                                    <div className="card-body shadow">
                                        <img src={section.imageDetails.imageUrl} className="img-fluid" alt="..." />
                                        <h5>{section.sectionName}</h5>
                                        <p>{onSlice(section.sectionDetails)}</p>
                                        <div className="text-right">
                                            <Link to={`classroom/courses/${section.sectionId}/${section.sectionName}`} type="button" className="btn btn-sm shadow-none">
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