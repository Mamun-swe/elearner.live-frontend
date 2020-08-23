import React from 'react';
import '../styles/workshop.scss';
import WorkShopImg from '../../assets/static/workshop.png';

const WorkShop = () => {
    return (
        <div className="work-shop">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 pt-lg-5">
                        <h1 className="text-center text-lg-left" data-aos="fade-right">
                            রয়েছে ফ্রি সেমিনারের সুবিধা
                        </h1>
                        <p className="d-none d-lg-block" data-aos="fade-right">আমাদের রয়েছে দেশ এবং দেশের বাইরের ডেভেলপার এবং নামকরা ট্রেইনারদের দ্বারা লেখা <span>"eLearner Blog"</span> সম্পূর্ণ ফ্রী তে। </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <img data-aos="fade-left" src={WorkShopImg} className="img-fluid" alt="..." />
                        <p className="d-lg-none" data-aos="fade-right">আমাদের রয়েছে দেশ এবং দেশের বাইরের ডেভেলপার এবং নামকরা ট্রেইনারদের দ্বারা লেখা <span>"eLearner Blog"</span> সম্পূর্ণ ফ্রী তে। </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkShop;