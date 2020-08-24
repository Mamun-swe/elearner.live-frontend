import React, { useState, useEffect } from 'react';
import '../Components/styles/navbar.scss';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_dehaze, ic_close } from 'react-icons-kit/md';

import Logo from '../assets/static/logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY < 200;
            if (isTop !== true) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        })
    }, [])

    return (
        <div className={scrolled ? "nav-bar" : "nav-bar scrolled"}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between">
                            <div className="title">
                                <Link to="/">
                                    <img src={Logo} className="img-fluid" alt="logo" />
                                </Link>
                            </div>

                            {/* Page Links */}
                            <div className={isOpen ? "menu-items pt-lg-2 open-menu" : "menu-items pt-lg-2 hide-menu"}>
                                <ul>
                                    <li><NavLink activeClassName="isActive" to="/">লাইভ কোর্স করব !</NavLink></li>
                                    <li><NavLink activeClassName="isActive" to="/sell-course">কোর্স কিনব !</NavLink></li>
                                    <li><NavLink activeClassName="isActive" to="/offers">চলমান অফার</NavLink></li>
                                    <li><NavLink activeClassName="isActive" to="/blog">ব্লগ</NavLink></li>
                                </ul>
                            </div>

                            <div className="join d-none d-lg-block">
                                <Link to="/join" type="button" className="btn shadow px-4">জয়েন করুন</Link>
                            </div>

                            <div className="ml-auto d-lg-none">
                                <button type="button" className="btn btn-light rounded-circle shadow-none float-right d-lg-none toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ?
                                        <Icon icon={ic_close} size={25} />
                                        :
                                        <Icon icon={ic_dehaze} size={25} />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;