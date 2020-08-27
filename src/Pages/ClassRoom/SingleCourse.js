import React, { useState, useEffect } from 'react';
import '../../Components/styles/class-room-layout.scss';
import { useParams, useHistory } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_backspace } from 'react-icons-kit/md/ic_keyboard_backspace';
import axios from 'axios';
import Loader from '../../Components/Loading';


const SingleCourse = () => {
    let { courseId } = useParams();
    const history = useHistory();
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(false);

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
                        <p>{course.body}</p>


                        <div className="enroll text-center mb-4 mb-lg-5">
                            <button
                                type="button"
                                className="btn shadow-none"
                            >
                                কোর্সটি সিলেক্ট করুন
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleCourse;