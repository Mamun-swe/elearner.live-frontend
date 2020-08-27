import React, { useEffect, useState } from 'react';
import '../../Components/styles/class-room-layout.scss';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PageLoading from '../../Components/Loading';

import CourseImg from '../../assets/courses/coding.png';

const CourseShow = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)

    let { section } = useParams();

    useEffect(() => {
        const fetchUser = () => {
            setLoading(true)
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${section}`)
                .then(res => {

                    setCourses(res.data);
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
                <div className="p-3">
                    <div className="title mb-2">
                        <h4 className="mb-0 ml-2">ওয়েব ডিজাইন</h4>
                    </div>

                    {courses.length > 0 && courses.map((course, i) =>
                        <div className="card course-card" key={i}>
                            <div className="card-body shadow-sm">
                                <img src={CourseImg} className="img-fluid" alt="..." />
                                <p>ওয়েব ডিজাইন</p>
                                <Link
                                    to={`/classroom/course/${course.id}`}
                                    type="button"
                                    className="btn btn-sm shadow-none"
                                >এখানে ক্লিক করুন</Link>
                            </div>
                        </div>
                    )}

                </div>
            }
        </div>
    );
};

export default CourseShow;