import React from 'react';
import '../../Components/styles/auth.scss';

import ReadingImg from '../../assets/static/girl_reading.png';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="auth-layout" data-aos="fade-zoom">
            <div className="flex-center flex-column">
                <div className="card shadow-sm">
                    <h3>শেখা হোক ঘরে বসেই</h3>
                    <img src={ReadingImg} className="img-fluid" alt="..." />
                    <div className="links mt-3">
                        <Link to="/register" type="button" className="btn btn-block shadow-none mb-3">নতুন ? ফ্রি একাউন্ট খুলুন</Link>
                        <p className="mb-1">যদি একাউন্ট থেকে থাকে তাহলে</p>
                        <Link to="/login" type="button" className="btn btn-block shadow-none mb-3">লগইন করুন</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;