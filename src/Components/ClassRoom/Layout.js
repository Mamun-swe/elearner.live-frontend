import React, { useState, useEffect } from 'react';
import '../styles/class-room-layout.scss';
import axios from 'axios';
import { Icon } from 'react-icons-kit';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { coursesList, cartCoursesList } from '../../Redux/Actions/coursesAction';
import { ic_dehaze, ic_close } from 'react-icons-kit/md';
import SearchComponent from './Search';
import { apiURL } from '../../utils/apiURL';

import Logo from '../../assets/static/logo.png';
import AndroidImage from '../../assets/courses/mobile.png';
import ProfileImg from '../../assets/static/profilePic.png';

const Layout = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const [sections, setSections] = useState([])
    // const [popularCourses, setPopularCourses] = useState([])
    const { loading, courses, cartCourses } = useSelector((state => state.courses))

    useEffect(() => {
        dispatch(coursesList())
        dispatch(cartCoursesList())
        const fetchSections = async () => {
            try {
                const result = await axios.get(`${apiURL}sections`)
                setSections(result.data.sections)
            } catch (error) {
                console.log(error);
            }
        }
        fetchSections()
    }, [dispatch])

    const doLogout = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="class-room-layout">

            {/* Navbar */}
            <div className="nav-bar p-0">
                <div className="d-flex">
                    <div className="logo-section">
                        <Link to="/">
                            <img src={Logo} className="img-fluid" alt="..." />
                        </Link>
                    </div>

                    {/* Desktop Search */}
                    <div className="flex-fill d-none d-lg-block px-lg-5 desktop-search-container shadow-sm">
                        <SearchComponent />
                    </div>
                    <div className="ml-auto btn-section">
                        {localStorage.getItem('token') ?
                            <button type="button" onClick={doLogout} className="btn shadow-none">লগ আউট</button>
                            : <Link to="/login" type="button" className="btn shadow-none">লগ ইন</Link>
                        }
                    </div>
                    <div className="d-lg-none pr-2 py-2">
                        <button type="button" className="btn shadow-none rounded-circle toggle-btn" onClick={() => setOpen(!open)}>
                            {open ?
                                <Icon icon={ic_close} size={25} />
                                :
                                <Icon icon={ic_dehaze} size={25} />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="mobile-search d-lg-none shadow-sm">
                    <SearchComponent />
                </div>

            </div>


            {/* Left Menu */}
            <div className={open ? "left-menu d-lg-block open-menu" : "left-menu d-lg-block"}>

                {/* My Profile */}
                {localStorage.getItem("token") ? (
                    <div className="profile text-center mt-4 d-lg-none">
                        <div className="profile-img-box rounded-circle mb-2">
                            <img src={ProfileImg} className="img-fluid" alt="..." />
                        </div>
                        <p className="text-capitalize mb-0">moniruzzaman roni</p>
                        <p className="mb-4">(Learner)</p>
                    </div>
                ) : null}

                <div className="links-menu my-3">
                    <div className="title text-lg-center pb-2 mb-2 mt-2 border-bottom">
                        <h6 className="mb-0">সেকশন</h6>
                    </div>

                    {sections.length > 0 && sections.map((section, i) =>
                        <NavLink
                            key={i}
                            activeClassName="isActive"
                            to={`/classroom/courses/${section.sectionId}/${section.sectionName}`}
                            type="button"
                            className="btn shadow-none"
                        >
                            {section.sectionName}
                        </NavLink>
                    )}
                </div>

            </div>

            {/* Right Menu */}
            <div className="right-menu d-none d-lg-block">

                {/* My Courses */}
                {localStorage.getItem("token") ? (
                    <div className="my-courses">

                        {/* My Profile */}
                        <div className="profile text-center">
                            <div className="profile-img-box rounded-circle mb-2">
                                <img src={ProfileImg} className="img-fluid" alt="..." />
                            </div>
                            <p className="text-capitalize mb-0">moniruzzaman roni</p>
                            <p className="mb-4">(Learner)</p>
                        </div>

                        <div className="title text-lg-center mt-2 mb-3">
                            {cartCourses ?
                                <h6>আমার কোর্স সমূহ ( {cartCourses.length} )</h6>
                                : <h6>আমার কোর্স সমূহ ( 0 )</h6>}
                        </div>

                        {
                            loading ?
                                <p>Loading ...</p>
                                : cartCourses ?
                                    <div>
                                        {cartCourses.map((course, k) =>
                                            <div className="course-card my-course border-0" key={k}>
                                                <div className="card-body shadow-sm text-center">
                                                    {course.imageDetails ?
                                                        <img src={course.imageDetails.imageUrl} className="img-fluid" alt="..." />
                                                        : null}
                                                    <h6 className="mb-0">{course.courseName}</h6>
                                                    <div className="orientation-box">
                                                        <p>Orientation Date</p>
                                                        <div className="overlay">
                                                            <p>({course.orientationDateTime})</p>
                                                        </div>
                                                    </div>

                                                    <Link
                                                        to={`/classroom/payment/course/${course.courseId}`}
                                                        type="button"
                                                        className="btn btn-sm shadow-none"
                                                    >Enrollment Now</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    : null
                        }
                    </div>
                ) :

                    // Popular Courses
                    <div className="favourite-courses">
                        <div className="title text-lg-center mt-2">
                            <h6>জনপ্রিয় কোর্সগুলো</h6>
                        </div>

                        {/* {courses && courses.map((course, k) => */}

                        <div className="course-card my-course border-0">
                            <div className="card-body shadow-sm text-center">
                                <img src={AndroidImage} className="img-fluid" alt="..." />
                                <p>Android Development</p>
                                <p style={{ color: "#555" }}>hello details</p>
                                <div className="orientation-box">
                                    <p>With Moniruzzaman Roni</p>
                                    <div className="overlay">
                                        <p>4000 Tk.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="course-card my-course border-0">
                            <div className="card-body shadow-sm text-center">
                                <img src={AndroidImage} className="img-fluid" alt="..." />
                                <p>Web Development</p>
                                <p style={{ color: "#555" }}>hello details</p>
                                <div className="orientation-box">
                                    <p>With Abdullah Al Mamun</p>
                                    <div className="overlay">
                                        <p>4500 Tk.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* )} */}
                    </div>
                }
            </div>
        </div>
    );
};

export default Layout;