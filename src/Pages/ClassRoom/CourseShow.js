import React, { useEffect, useState } from 'react';
import '../../Components/styles/class-room-layout.scss';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PageLoading from '../../Components/Loading';

import CourseImg from '../../assets/courses/react.jpg';

const CourseShow = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)

    let { section } = useParams();

    useEffect(() => {
        const fetchUser = () => {
            setLoading(true)
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => {

                    setCourses(res.data.slice(0, 15));
                    setLoading(false)
                })
        }
        fetchUser()
    }, [section])

    return (
        <div className="courses-show">
            {loading ? (
                <PageLoading />
            ) :
                <div className="p-3 pb-5" data-aos="fade-zoom">
                    <div className="title mb-2">
                        <h4 className="mb-0 ml-2">ওয়েব ডিজাইন</h4>
                    </div>

                    {courses.length > 0 && courses.map((course, i) =>
                        <Link to={`/classroom/course/${course.id}`} key={i}>
                            <div className="card">
                                <div className="box">
                                    <div className="card-header">
                                        <img src={CourseImg} className="img-fluid" alt="..." />
                                    </div>

                                    <div className="card-body">
                                        <div className="text">
                                            <p className="text-muted">React দিয়ে ওয়েব ডিজাইন: Project from scratch</p>
                                            <h6 className="text-muted mb-0">
                                                <del>$4500</del> <span className="ml-2">$4000</span>
                                            </h6>
                                        </div>
                                        <div className="overlay">
                                            <p className="mb-0">With abdullah al mamun</p>
                                            <div className="enroll text-center">
                                                <p className="mb-0">Enroll Course</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            }
        </div >
    );
};

export default CourseShow;