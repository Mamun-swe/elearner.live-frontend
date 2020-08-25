import React from 'react';
import '../styles/class-room-layout.scss';
import Logo from '../../assets/static/logo.png';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="class-room-layout">
            {/* Navbar */}
            <div className="nav-bar shadow-sm">
                <div className="d-flex">
                    <div className="logo-section">
                        <img src={Logo} className="img-fluid" alt="..." />
                    </div>
                    <div className="flex-fill d-none d-md-block px-md-5">
                        <form>
                            <input
                                type="text"
                                className="form-control shadow-none"
                                placeholder="খুঁজুন ..."
                            />
                        </form>
                    </div>
                    <div className="ml-auto">
                        <Link to="/login" type="button" className="btn shadow-none">লগইন</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;