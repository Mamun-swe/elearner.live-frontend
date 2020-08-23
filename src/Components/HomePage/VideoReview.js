import React from 'react';
import '../styles/video-review.scss';
import VideoReviewImg from '../../assets/static/video-review.png';

const VideoReview = () => {
    return (
        <div className="video-review">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 pt-lg-5">
                        <h1 className="text-center text-lg-left" data-aos="fade-right">
                            রয়েছে ভিডিও রিভিউ সুবিধা
                        </h1>
                        <p className="d-none d-lg-block" data-aos="fade-right">আরো রয়েছে আপনার কোর্স এর প্রত্যেকটা ক্লাসের শেষে ক্লাসের "ভিডিও নোট" সম্পূর্ণ  ফ্রীতে।  যা রিপ্লে করবে আবারো পুরো ক্লাসটিকে। </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <img data-aos="fade-left" src={VideoReviewImg} className="img-fluid" alt="..." />
                        <p className="d-lg-none" data-aos="fade-right">আরো রয়েছে আপনার কোর্স এর প্রত্যেকটা ক্লাসের শেষে ক্লাসের "ভিডিও নোট" সম্পূর্ণ  ফ্রীতে।  যা রিপ্লে করবে আবারো পুরো ক্লাসটিকে। </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoReview;