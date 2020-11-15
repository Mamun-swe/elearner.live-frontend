import React, {useEffect, useState} from 'react';
import '../../Components/styles/class-room-layout.scss';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import PageLoading from '../../Components/Loading';
import {apiURL} from '../../utils/apiURL';

import EmptyImg from '../../assets/static/empty.png';

const CourseShow = () => {
    let {section, sectionName} = useParams()
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)
    const [nullCourses, setNullCourses] = useState(false)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true)
                const result = await axios.get(`${apiURL}courses/sections/${section}`)

                if (result.status === 200) {
                    setNullCourses(false)
                    setCourses(result.data.items)
                    setLoading(false)
                }
            } catch (error) {
                if (error.response.status === 404) {
                    setLoading(false)
                    setNullCourses(true)
                }
            }
        }
        fetchCourses()
    }, [section, sectionName])

    const onSlice = data => {
        if (data) {
            return data.slice(0, 47) + "..."
        } else {
            return null
        }
    }

    return (
        <div className="courses-show">
            {
                nullCourses ?
                    <div className="text-center empty-box" data-aos="fade-zoom">
                        <img src={EmptyImg} className="img-fluid empty-img" alt="..."/>
                        <h5>Opps !! No course found !</h5>
                    </div>

                    : loading ? (
                        <PageLoading/>
                    ) :
                    <div className="p-3 pb-5" data-aos="fade-zoom">
                        <div className="title mb-2">
                            <h4 className="mb-0 ml-2">{sectionName}</h4>
                        </div>

                        {courses.length > 0 && courses.map((course, i) =>
                            <Link to={`/classroom/course/${course.courseId}`} key={i}>
                                <div className="card">
                                    <div className="box">
                                        <div className="card-header">
                                            <img src={course.imageDetails.imageUrl} className="img-fluid" alt="..."/>
                                        </div>

                                        <div className="card-body">
                                            <div className="text">
                                                <p className="text-muted">{onSlice(course.courseName)}</p>
                                                <h6 className="text-muted mb-0">
                                                    <del>Tk. {course.coursePriceInTk}</del>
                                                    {course.coursePriceInTkWithOffer <= 0 ?
                                                        <span>FREE</span> :
                                                        <span
                                                            className="ml-2">Tk. {course.coursePriceInTkWithOffer}</span>
                                                    }
                                                </h6>
                                            </div>
                                            <div className="overlay">
                                                <p className="mb-0">With {course.courseInstructorName}</p>
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
        </div>
    );
};

export default CourseShow;
