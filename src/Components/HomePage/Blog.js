import React from 'react';
import '../styles/blog.scss';
import blogImg from '../../assets/static/blog.png';

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 text-center">
                        <h1 data-aos="fade-left" className="d-lg-none">ফ্রি তে ব্লগ পড়ুন...</h1>
                        <img data-aos="fade-right" src={blogImg} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-12 col-lg-6 pt-lg-5">
                        <h1 className="d-none d-lg-block" data-aos="fade-left">ফ্রি তে ব্লগ পড়ুন...</h1>
                        <p data-aos="fade-left">আমাদের রয়েছে দেশ এবং দেশের বাইরের ডেভেলপার এবং নামকরা ট্রেইনারদের দ্বারা লেখা <span>"eLearner Blog"</span> সম্পূর্ণ ফ্রী তে। </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;