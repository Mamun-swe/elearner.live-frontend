import React, { useState, useEffect } from 'react';
import '../styles/class-room-layout.scss';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_search } from 'react-icons-kit/md/ic_search';
import axios from 'axios';

import Logo from '../../assets/static/logo.png';
import DesktopImg from '../../assets/courses/mobile.png';

const Layout = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    setCourses(res.data)
                })
        }
        fetchCourses()
    }, [])

    return (
        <div className="class-room-layout">
            {/* Navbar */}
            <div className="nav-bar p-0">
                <div className="d-flex">
                    <div className="logo-section">
                        <img src={Logo} className="img-fluid" alt="..." />
                    </div>

                    {/* Desktop Search */}
                    <div className="flex-fill d-none d-lg-block px-lg-5 desktop-search-container shadow-sm">
                        <form>
                            <input
                                type="text"
                                className="form-control shadow-none"
                                placeholder="আরো খুঁজুন ..."
                            />
                            <Icon icon={ic_search} size={25} className="search-icon" style={{ color: '#555' }} />
                        </form>
                    </div>
                    <div className="ml-auto btn-section">
                        <Link to="/login" type="button" className="btn shadow-none">লগ ইন</Link>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="mobile-search d-lg-none shadow-sm">
                    <form>
                        <input
                            type="text"
                            className="form-control shadow-none"
                            placeholder="আরো খুঁজুন ..."
                        />
                        <Icon icon={ic_search} size={25} className="search-icon" style={{ color: '#555' }} />
                    </form>
                </div>

            </div>


            {/* Left Menu */}
            <div className="left-menu">

                <div className="links-menu my-3">
                    <div className="title text-lg-center mb-2 mb-lg-3 mt-2">
                        <h5 className="mb-0">সেকশন</h5>
                    </div>
                    <NavLink activeClassName="isActive" to="/classroom" type="button" className="btn shadow-none">সেকশন নাম</NavLink>
                    <NavLink activeClassName="isActive" to="/classroom/df" type="button" className="btn shadow-none">সেকশন নাম</NavLink>
                    <NavLink activeClassName="isActive" to="/classroom/fd" type="button" className="btn shadow-none">সেকশন নাম</NavLink>
                    <NavLink activeClassName="isActive" to="/classroom/df" type="button" className="btn shadow-none">সেকশন নাম</NavLink>
                    <NavLink activeClassName="isActive" to="/classroom/df" type="button" className="btn shadow-none">সেকশন নাম</NavLink>
                </div>

            </div>

            {/* Right Menu */}
            <div className="right-menu d-none d-lg-block">
                <div className="favourite-courses">
                    <div className="title text-lg-center mb-2 mb-lg-3 mt-2">
                        <h5 className="mb-0">জনপ্রিয় কোর্সগুলো</h5>
                    </div>

                    {courses && courses.map((course, i) =>
                        <Link to="/classroom" >
                            <div className="course-card border-0" key={i}>
                                <div className="card-body shadow-sm text-center">
                                    <img src={DesktopImg} className="img-fluid" alt="..." />
                                    <p className="mb-0">অ্যান্ড্রয়েড ডেভেলপমেন্ট</p>
                                </div>
                            </div>
                        </Link>
                    )}


                </div>
            </div>





        </div>
    );
};

export default Layout;