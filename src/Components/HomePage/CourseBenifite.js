import React from 'react';
import '../styles/course-benifite.scss';
import QuestionImg from '../../assets/static/question.png';

const CourseBenifite = () => {
    return (
        <div className="course-benifite">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-4 mb-lg-5">
                        <div className="header">
                            <h1 data-aos="fade-left">কোর্স করে কি লাভ <span>?</span></h1>
                            <img data-aos="fade-down" src={QuestionImg} className="img-fluid" alt="..." />
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <p data-aos="zoom-in">ভারত দক্ষিণ এশিয়ার একটি রাষ্ট্র। ভৌগোলিক আয়তনের বিচারে এটি দক্ষিণ এশিয়ার বৃহত্তম এবং বিশ্বের সপ্তম বৃহৎ রাষ্ট্র। অন্যদিকে জনসংখ্যার বিচারে এটি বিশ্বের দ্বিতীয় সর্বাধিক জনবহুল তথা বৃহত্তম গণত্রান্ত্রিক রাষ্ট্র।  সুপ্রাচীন কাল থেকেই ভারতীয় উপমহাদেশ অর্থনৈতিক সমৃদ্ধ ও সাংস্ক্রিতিক ঐতিহ্যের জন্য সুপরিচিত। ভারত দক্ষিণ এশিয়ার একটি রাষ্ট্র। ভৌগোলিক আয়তনের বিচারে এটি দক্ষিণ এশিয়ার বৃহত্তম এবং বিশ্বের সপ্তম বৃহৎ রাষ্ট্র। অন্যদিকে জনসংখ্যার বিচারে এটি বিশ্বের দ্বিতীয় সর্বাধিক জনবহুল তথা বৃহত্তম গণত্রান্ত্রিক রাষ্ট্র।  সুপ্রাচীন কাল থেকেই ভারতীয় উপমহাদেশ অর্থনৈতিক সমৃদ্ধ ও সাংস্ক্রিতিক ঐতিহ্যের জন্য সুপরিচিত। </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseBenifite;