import React from 'react';
import '../../Components/styles/auth.scss';
import {Link} from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

import ReadingImg from '../../assets/static/girl_reading.png';


const Layout = () => {
    let updateMassageForRegistration = 'This future approximately available on 24-09-2020'
    let updateMassageForLogin = 'This future approximately available on 24-09-2020'
    return (
        <div>
            <NavBar />
            <div className="auth-layout" data-aos="fade-zoom">
                <div className="flex-center flex-column">
                    <div className="card shadow-sm">
                        <h3>শেখা হোক ঘরে বসেই</h3>
                        <img src={ReadingImg} className="img-fluid" alt="..." />
                        <div className="links mt-3">
                            {/*<Link to="/register" type="button" className="btn btn-block shadow-none mb-3">নতুন ? ফ্রি একাউন্ট খুলুন</Link>*/}

                            {/*For site-updating page show*/}
                            <Link to={`/register`}
                                  key={updateMassageForRegistration} type="button"
                                  className="btn btn-block shadow-none mb-3">নতুন ? ফ্রি একাউন্ট খুলুন</Link>

                            <p className="mb-1">যদি একাউন্ট থেকে থাকে তাহলে</p>
                            {/*<Link to="/login" type="button" className="btn btn-block shadow-none mb-3">লগইন করুন</Link>*/}

                            {/*For site-updating page show*/}
                            <Link to={`/login`} key={updateMassageForLogin}
                                  type="button" className="btn btn-block shadow-none mb-3">লগইন করুন</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
