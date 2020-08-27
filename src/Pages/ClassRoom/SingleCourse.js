import React, { useState, useEffect } from 'react';
import '../../Components/styles/class-room-layout.scss';
import { useParams, useHistory } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_backspace } from 'react-icons-kit/md/ic_keyboard_backspace';
import axios from 'axios';
import Collapse from 'react-bootstrap/Collapse';
import Loader from '../../Components/Loading';


const SingleCourse = () => {
    let { courseId } = useParams();
    const history = useHistory();
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);


    useEffect(() => {
        const fetchCourse = () => {
            setLoading(true)
            axios.get(`https://jsonplaceholder.typicode.com/posts/${courseId}`)
                .then(res => {
                    setCourse(res.data)
                    setLoading(false)
                })
        }
        fetchCourse()
    }, [courseId])



    const goBackPrevious = () => {
        history.goBack();
    }
    return (
        <div className="single-course p-3">
            {loading ? (<Loader />) :
                <div data-aos="fade-zoom">
                    <div className="title-bar border-bottom pb-2 mb-3">
                        <div className="d-flex">
                            <div className="pr-2">
                                <button
                                    type="button"
                                    className="btn rounded-circle shadow-none"
                                    onClick={goBackPrevious}
                                >
                                    <Icon icon={ic_keyboard_backspace} size={25} />
                                </button>
                            </div>
                            <div>
                                <h5 className="mb-0 mt-1">{course.title}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="content">

                        <div className="embed-responsive embed-responsive-16by9 mb-4">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="..." allowFullScreen></iframe>
                        </div>

                        <div className="d-md-flex p-3 shadow mb-4">
                            <div>
                                <h5 className="mb-0">
                                    <del className="text-muted">$5000</del>
                                    <span className="text-success ml-3">$5000</span>
                                </h5>
                                <small>*60% for Covid-19</small>
                            </div>
                            <div className="ml-auto pt-3 pt-md-0">
                                <button
                                    type="button"
                                    className="btn shadow-none"
                                >Free Registration</button>
                            </div>
                        </div>

                        {/* Schedule */}
                        <div className="schedule mt-5 mb-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Orientation Class</h6>
                                    <p className="mb-0">(03.00PM - 04:00PM)</p>
                                    <p className="mb-0">10 Jun, 2020</p>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Course start date</h6>
                                    <p className="mb-0">10 Jun, 2020</p>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Course end date</h6>
                                    <p className="mb-0">10 Jun, 2020</p>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Total number of course</h6>
                                    <p className="mb-0">15</p>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Each course duration</h6>
                                    <p className="mb-0">2hrs.</p>
                                </div>

                                <div className="col-12 text-sm-right">
                                    <p className="text-success mb-0">* 30 students already enrollmented on this course</p>
                                </div>
                            </div>
                        </div>


                        <p>আজ বুধবার মালিবাগে সিআইডির সদর দপ্তরে আয়োজিত সংবাদ সম্মেলনে এসব তথ্য জানান ঢাকা মেট্রোর বিশেষ পুলিশ সুপার সৈয়দা জান্নাত আরা। তিনি বলেন, প্রতারণার শিকার কাফরুলের বাসিন্দা খায়রুল ইসলামের অভিযোগের পরিপ্রেক্ষিতে চারজনকে গ্রেপ্তার করে সিআইডি।
                        প্রতারণার শিকার খায়রুল জানান, একজনের সঙ্গে তাঁর ফেসবুকে বন্ধুত্ব তৈরি হয়। বন্ধুত্বের একপর্যায়ে তাঁকে উপহার পাঠানোর প্রস্তাব দেওয়া হয়। পরে তাঁর নামে ‘উপহার বাক্স’ পাঠানো হয়। ওই বাক্সে কয়েক মিলিয়ন ডলারের মূল্যবান সামগ্রী আছে বলে ওই খায়রুলকে বলা হয়। খায়রুলকে শুল্ক গুদাম থেকে ‘উপহার’ গ্রহণ করতে বলেন প্রতারকেরা। সহযোগীদের মাধ্যমে একজন প্রতারক নিজেকে শুল্ক কমিশনার পরিচয় দিয়ে শুল্কসহ বিভিন্ন ব্যাংকে ৫৫ হাজার টাকা জমা দিতে চাপ দেন খায়রুলকে। টাকা জমা না দিলে তাঁকে আইনি জটিলতার ভয় দেখায় প্রতারক চক্রটি।
                        </p>


                        {/* FAQ's */}
                        <div className="faqs mb-5">

                            {/* faq 1 */}
                            <div className="card">
                                <div
                                    className="card-header"
                                    onClick={() => setOpen1(!open1)}
                                    aria-controls="collapse-1"
                                    aria-expanded={open1}
                                >
                                    <h5 className="mb-0">কি কি শিখব এই কোর্সে ?</h5>
                                </div>

                                <Collapse in={open1}>
                                    <div className="card-body" id="collapse-1">
                                        <p>
                                            আজ বুধবার মালিবাগে সিআইডির সদর দপ্তরে আয়োজিত সংবাদ সম্মেলনে এসব তথ্য জানান ঢাকা মেট্রোর বিশেষ পুলিশ সুপার সৈয়দা জান্নাত আরা। তিনি বলেন, প্রতারণার শিকার কাফরুলের বাসিন্দা খায়রুল ইসলামের অভিযোগের পরিপ্রেক্ষিতে চারজনকে গ্রেপ্তার করে সিআইডি। প্রতারণার শিকার খায়রুল জানান, একজনের সঙ্গে তাঁর ফেসবুকে বন্ধুত্ব তৈরি হয়। বন্ধুত্বের একপর্যায়ে তাঁকে উপহার পাঠানোর প্রস্তাব দেওয়া হয়। পরে তাঁর নামে ‘উপহার বাক্স’ পাঠানো হয়। ওই বাক্সে কয়েক মিলিয়ন ডলারের মূল্যবান সামগ্রী আছে বলে ওই খায়রুলকে বলা হয়। খায়রুলকে শুল্ক গুদাম থেকে ‘উপহার’ গ্রহণ করতে বলেন প্রতারকেরা। সহযোগীদের মাধ্যমে একজন প্রতারক নিজেকে শুল্ক কমিশনার পরিচয় দিয়ে শুল্কসহ বিভিন্ন ব্যাংকে ৫৫ হাজার টাকা জমা দিতে চাপ দেন খায়রুলকে। টাকা জমা না দিলে তাঁকে আইনি জটিলতার ভয় দেখায় প্রতারক চক্রটি।
                                        </p>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 2 */}
                            <div className="card">
                                <div
                                    className="card-header"
                                    onClick={() => setOpen2(!open2)}
                                    aria-controls="collapse-2"
                                    aria-expanded={open2}
                                >
                                    <h5 className="mb-0">কেন করব এই কোর্স ?</h5>
                                </div>

                                <Collapse in={open2}>
                                    <div className="card-body" id="collapse-2">
                                        <p>
                                            আজ বুধবার মালিবাগে সিআইডির সদর দপ্তরে আয়োজিত সংবাদ সম্মেলনে এসব তথ্য জানান ঢাকা মেট্রোর বিশেষ পুলিশ সুপার সৈয়দা জান্নাত আরা। তিনি বলেন, প্রতারণার শিকার কাফরুলের বাসিন্দা খায়রুল ইসলামের অভিযোগের পরিপ্রেক্ষিতে চারজনকে গ্রেপ্তার করে সিআইডি। প্রতারণার শিকার খায়রুল জানান, একজনের সঙ্গে তাঁর ফেসবুকে বন্ধুত্ব তৈরি হয়। বন্ধুত্বের একপর্যায়ে তাঁকে উপহার পাঠানোর প্রস্তাব দেওয়া হয়। পরে তাঁর নামে ‘উপহার বাক্স’ পাঠানো হয়। ওই বাক্সে কয়েক মিলিয়ন ডলারের মূল্যবান সামগ্রী আছে বলে ওই খায়রুলকে বলা হয়। খায়রুলকে শুল্ক গুদাম থেকে ‘উপহার’ গ্রহণ করতে বলেন প্রতারকেরা। সহযোগীদের মাধ্যমে একজন প্রতারক নিজেকে শুল্ক কমিশনার পরিচয় দিয়ে শুল্কসহ বিভিন্ন ব্যাংকে ৫৫ হাজার টাকা জমা দিতে চাপ দেন খায়রুলকে। টাকা জমা না দিলে তাঁকে আইনি জটিলতার ভয় দেখায় প্রতারক চক্রটি।
                                        </p>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 3 */}
                            <div className="card">
                                <div
                                    className="card-header"
                                    onClick={() => setOpen3(!open3)}
                                    aria-controls="collapse-3"
                                    aria-expanded={open3}
                                >
                                    <h5 className="mb-0">কোর্স  ইন্সট্রাক্টর কে ?</h5>
                                </div>

                                <Collapse in={open3}>
                                    <div className="card-body" id="collapse-3">
                                        <p>
                                            আজ বুধবার মালিবাগে সিআইডির সদর দপ্তরে আয়োজিত সংবাদ সম্মেলনে এসব তথ্য জানান ঢাকা মেট্রোর বিশেষ পুলিশ সুপার সৈয়দা জান্নাত আরা। তিনি বলেন, প্রতারণার শিকার কাফরুলের বাসিন্দা খায়রুল ইসলামের অভিযোগের পরিপ্রেক্ষিতে চারজনকে গ্রেপ্তার করে সিআইডি। প্রতারণার শিকার খায়রুল জানান, একজনের সঙ্গে তাঁর ফেসবুকে বন্ধুত্ব তৈরি হয়। বন্ধুত্বের একপর্যায়ে তাঁকে উপহার পাঠানোর প্রস্তাব দেওয়া হয়। পরে তাঁর নামে ‘উপহার বাক্স’ পাঠানো হয়। ওই বাক্সে কয়েক মিলিয়ন ডলারের মূল্যবান সামগ্রী আছে বলে ওই খায়রুলকে বলা হয়। খায়রুলকে শুল্ক গুদাম থেকে ‘উপহার’ গ্রহণ করতে বলেন প্রতারকেরা। সহযোগীদের মাধ্যমে একজন প্রতারক নিজেকে শুল্ক কমিশনার পরিচয় দিয়ে শুল্কসহ বিভিন্ন ব্যাংকে ৫৫ হাজার টাকা জমা দিতে চাপ দেন খায়রুলকে। টাকা জমা না দিলে তাঁকে আইনি জটিলতার ভয় দেখায় প্রতারক চক্রটি।
                                        </p>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 4 */}
                            <div className="card">
                                <div
                                    className="card-header"
                                    onClick={() => setOpen4(!open4)}
                                    aria-controls="collapse-4"
                                    aria-expanded={open4}
                                >
                                    <h5 className="mb-0">কখন ক্লাস হবে ?</h5>
                                </div>

                                <Collapse in={open4}>
                                    <div className="card-body" id="collapse-4">
                                        <p>
                                            আজ বুধবার মালিবাগে সিআইডির সদর দপ্তরে আয়োজিত সংবাদ সম্মেলনে এসব তথ্য জানান ঢাকা মেট্রোর বিশেষ পুলিশ সুপার সৈয়দা জান্নাত আরা। তিনি বলেন, প্রতারণার শিকার কাফরুলের বাসিন্দা খায়রুল ইসলামের অভিযোগের পরিপ্রেক্ষিতে চারজনকে গ্রেপ্তার করে সিআইডি। প্রতারণার শিকার খায়রুল জানান, একজনের সঙ্গে তাঁর ফেসবুকে বন্ধুত্ব তৈরি হয়। বন্ধুত্বের একপর্যায়ে তাঁকে উপহার পাঠানোর প্রস্তাব দেওয়া হয়। পরে তাঁর নামে ‘উপহার বাক্স’ পাঠানো হয়। ওই বাক্সে কয়েক মিলিয়ন ডলারের মূল্যবান সামগ্রী আছে বলে ওই খায়রুলকে বলা হয়। খায়রুলকে শুল্ক গুদাম থেকে ‘উপহার’ গ্রহণ করতে বলেন প্রতারকেরা। সহযোগীদের মাধ্যমে একজন প্রতারক নিজেকে শুল্ক কমিশনার পরিচয় দিয়ে শুল্কসহ বিভিন্ন ব্যাংকে ৫৫ হাজার টাকা জমা দিতে চাপ দেন খায়রুলকে। টাকা জমা না দিলে তাঁকে আইনি জটিলতার ভয় দেখায় প্রতারক চক্রটি।
                                        </p>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 5 */}
                            <div className="card">
                                <div
                                    className="card-header"
                                    onClick={() => setOpen5(!open5)}
                                    aria-controls="collapse-5"
                                    aria-expanded={open5}
                                >
                                    <h5 className="mb-0">কিভাবে জয়েন করব এই কোর্সে ?</h5>
                                </div>

                                <Collapse in={open5}>
                                    <div className="card-body" id="collapse-5">
                                        <p>
                                            আজ বুধবার মালিবাগে সিআইডির সদর দপ্তরে আয়োজিত সংবাদ সম্মেলনে এসব তথ্য জানান ঢাকা মেট্রোর বিশেষ পুলিশ সুপার সৈয়দা জান্নাত আরা। তিনি বলেন, প্রতারণার শিকার কাফরুলের বাসিন্দা খায়রুল ইসলামের অভিযোগের পরিপ্রেক্ষিতে চারজনকে গ্রেপ্তার করে সিআইডি। প্রতারণার শিকার খায়রুল জানান, একজনের সঙ্গে তাঁর ফেসবুকে বন্ধুত্ব তৈরি হয়। বন্ধুত্বের একপর্যায়ে তাঁকে উপহার পাঠানোর প্রস্তাব দেওয়া হয়। পরে তাঁর নামে ‘উপহার বাক্স’ পাঠানো হয়। ওই বাক্সে কয়েক মিলিয়ন ডলারের মূল্যবান সামগ্রী আছে বলে ওই খায়রুলকে বলা হয়। খায়রুলকে শুল্ক গুদাম থেকে ‘উপহার’ গ্রহণ করতে বলেন প্রতারকেরা। সহযোগীদের মাধ্যমে একজন প্রতারক নিজেকে শুল্ক কমিশনার পরিচয় দিয়ে শুল্কসহ বিভিন্ন ব্যাংকে ৫৫ হাজার টাকা জমা দিতে চাপ দেন খায়রুলকে। টাকা জমা না দিলে তাঁকে আইনি জটিলতার ভয় দেখায় প্রতারক চক্রটি।
                                        </p>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 6 */}
                            <div className="card">
                                <div
                                    className="card-header"
                                    onClick={() => setOpen6(!open6)}
                                    aria-controls="collapse-6"
                                    aria-expanded={open6}
                                >
                                    <h5 className="mb-0">যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন</h5>
                                </div>

                                <Collapse in={open6}>
                                    <div className="card-body" id="collapse-6">
                                        <p>
                                            আজ বুধবার মালিবাগে সিআইডির সদর দপ্তরে আয়োজিত সংবাদ সম্মেলনে এসব তথ্য জানান ঢাকা মেট্রোর বিশেষ পুলিশ সুপার সৈয়দা জান্নাত আরা। তিনি বলেন, প্রতারণার শিকার কাফরুলের বাসিন্দা খায়রুল ইসলামের অভিযোগের পরিপ্রেক্ষিতে চারজনকে গ্রেপ্তার করে সিআইডি। প্রতারণার শিকার খায়রুল জানান, একজনের সঙ্গে তাঁর ফেসবুকে বন্ধুত্ব তৈরি হয়। বন্ধুত্বের একপর্যায়ে তাঁকে উপহার পাঠানোর প্রস্তাব দেওয়া হয়। পরে তাঁর নামে ‘উপহার বাক্স’ পাঠানো হয়। ওই বাক্সে কয়েক মিলিয়ন ডলারের মূল্যবান সামগ্রী আছে বলে ওই খায়রুলকে বলা হয়। খায়রুলকে শুল্ক গুদাম থেকে ‘উপহার’ গ্রহণ করতে বলেন প্রতারকেরা। সহযোগীদের মাধ্যমে একজন প্রতারক নিজেকে শুল্ক কমিশনার পরিচয় দিয়ে শুল্কসহ বিভিন্ন ব্যাংকে ৫৫ হাজার টাকা জমা দিতে চাপ দেন খায়রুলকে। টাকা জমা না দিলে তাঁকে আইনি জটিলতার ভয় দেখায় প্রতারক চক্রটি।
                                        </p>
                                    </div>
                                </Collapse>
                            </div>

                        </div>










                    </div>
                </div>
            }
        </div>
    );
};

export default SingleCourse;