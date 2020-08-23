import React from 'react';
import '../styles/class-note.scss';
import ClassNoteImg from '../../assets/static/class-note.png';

const ClassNote = () => {
    return (
        <div className="class-note">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 text-center">
                        <h1 data-aos="fade-left" className="d-lg-none">রয়েছে ক্লাস নোট সুবিধা</h1>
                        <img data-aos="fade-right" src={ClassNoteImg} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-12 col-lg-6 pt-lg-5">
                        <h1 className="d-none d-lg-block" data-aos="fade-left">রয়েছে ক্লাস নোট সুবিধা</h1>
                        <p data-aos="fade-left">আপনার কোর্স এর প্রত্যাকটা ক্লাসকে আরো ভালো ভাবে বুঝার জন্য পাচ্ছেন <span>ক্লাস নোট</span>।  যা ওই ক্লাশে কি কি পড়ানো হয়েছে তা বুঝতে  সহযোগীতা করবে। </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassNote;