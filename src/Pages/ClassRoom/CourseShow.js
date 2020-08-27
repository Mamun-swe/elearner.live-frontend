import React, { useEffect, useState } from 'react';
import '../../Components/styles/class-room-layout.scss';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PageLoading from '../../Components/Loading';

import CourseImg from '../../assets/courses/Bangla_Goddo.png';

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
                <div className="p-3" data-aos="fade-zoom">
                    <div className="title mb-2">
                        <h4 className="mb-0 ml-2">ওয়েব ডিজাইন</h4>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-body">
                            {courses.length > 0 && courses.map((course, i) =>

                                <Link to={`/classroom/course/${course.id}`} key={i}>
                                    <div className="course-box">
                                        <img src={CourseImg} className="img-fluid" alt="..." />
                                        <p className="text-muted">ওয়েব ডিজাইন</p>
                                    </div>
                                </Link>

                            )}
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default CourseShow;