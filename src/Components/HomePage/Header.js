import React from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import headerBg1 from '../../assets/static/header_bg_1.png';
import headerBg from '../../assets/static/header_bg.png';
import mobilePcImg from '../../assets/static/pc_mobile.png';
import questionMark from '../../assets/static/question-mark.png';
import questionMark1 from '../../assets/static/question-mark-1.png';
import questionMark2 from '../../assets/static/question-mark-2.png';
import questionMark3 from '../../assets/static/question-mark-3.png';
import quote from '../../assets/static/quote.png';


const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="section section-1">
                            <h2 data-aos="fade-right">ক্যারিয়ার ! ফিউচার !</h2>
                            <h1 data-aos="fade-right">ঘরে বসেই শিখা হোক <br /> লাইভ কোর্সে ...</h1>
                            <h3 data-aos="fade-right">
                                <span className="mr-2"><img src={quote} alt="..." /></span>
                            হয়ে উঠুন একজন দক্ষ সফল ফ্রিল্যান্সার
                            <span className="ml-2"><img src={quote} alt="..." /></span>
                            </h3>
                            <img data-aos="zoom-in" src={headerBg1} className="bg-img-1 img-fluid" alt="..." />
                        </div>
                        <div className="section section-2">
                            <img src={headerBg} data-aos="zoom-in-up" className="bg-img" alt="..." />
                            <div className="image-box">
                                <img src={mobilePcImg} data-aos="fade-left" className="mobile-pc-img" alt="..." />
                                <img src={questionMark} data-aos="fade-right" className="q-mark" alt="..." />
                                <img src={questionMark1} data-aos="fade-down-right" className="q-mark-1" alt="..." />
                                <img src={questionMark2} data-aos="fade-down-left" className="q-mark-2" alt="..." />
                                <img src={questionMark3} data-aos="fade-up-left" className="q-mark-3" alt="..." />
                            </div>
                        </div>

                        <div className="text-center join-btn-box">
                            <Link to="/join" type="button" className="btn shadow px-4">জয়েন করুন</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;