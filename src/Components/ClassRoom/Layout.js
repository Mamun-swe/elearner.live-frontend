import React, { useState, useEffect } from 'react';
import '../styles/class-room-layout.scss';
import axios from 'axios';
import { Icon } from 'react-icons-kit';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { coursesList } from '../../Redux/Actions/coursesAction';
import { ic_dehaze, ic_close } from 'react-icons-kit/md';

import SearchComponent from './Search';

import Logo from '../../assets/static/logo.png';
import DesktopImg from '../../assets/courses/mobile.png';
import ProfileImg from '../../assets/static/profilePic.png';

const Layout = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const [popularCourses, setPopularCourses] = useState([])
    const { loading, courses } = useSelector((state => state.courses))

    useEffect(() => {
        dispatch(coursesList());

        const fetchCourses = () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    setPopularCourses(res.data.slice(0, 6))
                })
        }
        fetchCourses()
    }, [dispatch])

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
                        <Link to="/login" type="button" className="btn shadow-none">লগ ইন</Link>
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

                    {courses.map((course, i) =>
                        <NavLink
                            key={i}
                            activeClassName="isActive"
                            to={`/classroom/courses/${course.id}`}
                            type="button"
                            className="btn shadow-none"
                        >
                            {course.name.slice(0, 10)}
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

                        <div className="title text-lg-center mt-2">
                            <h6 className="mb-0">আমার কোর্সগুলো {courses.length}</h6>
                        </div>

                        {
                            loading ? (
                                <p>Loading ...</p>
                            ) : (
                                    courses.length > 0 ? (
                                        <div>
                                            {courses.map((course, k) =>
                                                <div className="course-card border-0" key={k}>
                                                    <div className="card-body shadow-sm text-center">
                                                        <img src={DesktopImg} className="img-fluid" alt="..." />
                                                        <p className="mb-0">অ্যান্ড্রয়েড ডেভেলপমেন্ট</p>
                                                        <Link
                                                            to={`/classroom/payment/course/${course.id}`}
                                                            type="button"
                                                            className="btn btn-sm shadow-none"
                                                        >View</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : null
                                )
                        }
                    </div>
                ) :

                    // Popular Courses
                    <div className="favourite-courses">
                        <div className="title text-lg-center mt-2">
                            <h6 className="mb-0">জনপ্রিয় কোর্সগুলো</h6>
                        </div>

                        {popularCourses && popularCourses.map((course, k) =>
                            <Link to={`/classroom/course/${course.id}`} >
                                <div className="course-card border-0" key={k}>
                                    <div className="card-body shadow-sm text-center">
                                        <img src={DesktopImg} className="img-fluid" alt="..." />
                                        <p className="mb-0">অ্যান্ড্রয়েড ডেভেলপমেন্ট</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default Layout;