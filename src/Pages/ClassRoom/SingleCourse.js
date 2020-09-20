import React, {useEffect, useState} from 'react';
import '../../Components/styles/class-room-layout.scss';
import {Link, useHistory, useParams} from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {ic_keyboard_backspace} from 'react-icons-kit/md/ic_keyboard_backspace';
import axios from 'axios';
import Collapse from 'react-bootstrap/Collapse';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {apiURL} from '../../utils/apiURL';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../../Components/Loading';

toast.configure({ autoClose: 2000 })
const SingleCourse = () => {
    let { courseId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    let updateMassageForFreeRegistration = 'This future approximately available on 28-09-2020'
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [saturdays, setSaturdays] = useState([])
    const [sundays, setSundays] = useState([])
    const [mondays, setMondays] = useState([])
    const [tuesdays, setTuesdays] = useState([])
    const [wednesdays, setWednesdays] = useState([])
    const [thursdays, setThursdays] = useState([])
    const [fridays, setFridays] = useState([])

    useEffect(() => {
        const fetchSingleCourse = async () => {
            try {
                setLoading(true)
                const result = await axios.get(`${apiURL}courses/${courseId}`)
                setCourse(result.data)
                setSaturdays(result.data.courseClassTimeSchedule.saturdays)
                setSundays(result.data.courseClassTimeSchedule.sundays)
                setMondays(result.data.courseClassTimeSchedule.mondays)
                setTuesdays(result.data.courseClassTimeSchedule.tuesdays)
                setWednesdays(result.data.courseClassTimeSchedule.wednesdays)
                setThursdays(result.data.courseClassTimeSchedule.thursdays)
                setFridays(result.data.courseClassTimeSchedule.fridays)
                setLoading(false)
            } catch (error) {
                if (error) console.log(error)
            }
        }
        fetchSingleCourse()
    }, [courseId])

    const goBackPrevious = () => {
        history.goBack();
    }

    const submitCourse = (data) => {
        // if (localStorage.getItem('token')) {
        //     const newData = {
        //         courseId: data.courseId,
        //         courseName: data.courseName,
        //         orientationDateTime: data.courseOrientationDate,
        //         imageDetails: data.imageDetails
        //     }
        //     dispatch(addCourse(newData))
        // } else {
        //     history.push('/login')
        // }

        //For Site Updating Message
        history.push('/site-updating/' + updateMassageForFreeRegistration)
    }

    return (
        <div className="single-course p-3">

            {loading ? (<Loader />) :
                <div data-aos="fade-zoom" className="px-lg-5">
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
                                <h5 className="mb-0 mt-1">{course.courseName}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="content">

                        <div className="embed-responsive embed-responsive-21by9 mb-4">
                            <iframe className="embed-responsive-item" src={course.youtubeEmbeddedLink} title="..." allowFullScreen></iframe>
                        </div>

                        <div className="d-md-flex p-3 shadow mb-4">
                            <div>
                                <h5 className="mb-0">
                                    <del className="text-muted">Tk. {course.coursePriceInTk}</del>
                                    <span className="text-success ml-3">Tk. {course.coursePriceInTkWithOffer}</span>
                                </h5>
                                {course.coursePriceInTkWithOffer <= 0 ?
                                    <p className="mb-0 font-weight-bold free-enroll">*Free Enrollment Now</p>
                                    : course.offer ?
                                        <small>*{course.offer.specialOfferReason}</small>
                                        : null}
                            </div>
                            <div className="ml-auto pt-3 pt-md-0">
                                <button
                                    type="button"
                                    className="btn shadow-none mt-md-1"
                                    onClick={() => submitCourse(course)}
                                >Free Registration</button>
                            </div>
                        </div>

                        {/* Schedule */}
                        <div className="schedule mt-5 mb-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Orientation Class</h6>
                                    <p className="mb-0">{course.courseOrientationDate}</p>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Course start date</h6>
                                    <p className="mb-0">{course.courseStartingDate}</p>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Course end date</h6>
                                    <p className="mb-0">{course.courseFinishingDate}</p>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Total number of classes</h6>
                                    <p className="mb-0">{course.courseNumberOfClasses}</p>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3">
                                    <h6>Each class duration</h6>
                                    <p className="mb-0">{course.courseClassDuration}</p>
                                </div>

                                <div className="col-12 text-sm-right">
                                    {course.registeredLearners ?
                                        <p className="text-success mb-0">* {course.registeredLearners.length} students already enrollmented on this course</p>
                                        : null}
                                </div>
                            </div>
                        </div>

                        <p>{course.courseBasicDescription}</p>

                        {/* FAQ's */}
                        <div className="faqs mb-5">

                            {/* faq 1 what we learn in this course */}
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
                                        {ReactHtmlParser(course.courseGoal)}
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 2 why do this course */}
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
                                        <p>{course.courseWhyDo}</p>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 3 Instructor Info */}
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
                                        <h5 className="mb-0">{course.courseInstructorName}</h5>
                                        <p className="mb-0">{course.courseInstructorQualification}</p>
                                        <p>Instructor of
                                            <span className="ml-2" style={{ color: "#fc5632" }}>(elearners.live)</span>
                                        </p>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 4 class Schedule */}
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
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <td><p>Day</p></td>
                                                    <td><p>Start Time</p></td>
                                                    <td><p>End Time</p></td>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {saturdays &&
                                                    saturdays.length > 0 &&
                                                    saturdays.map((day, i) =>
                                                        <tr key={i}>
                                                            <td><p>Saturday</p></td>
                                                            <td><p>{day.startTime}</p></td>
                                                            <td><p>{day.endTime}</p></td>
                                                        </tr>
                                                    )}

                                                {sundays &&
                                                    sundays.length > 0 &&
                                                    sundays.map((day, i) =>
                                                        <tr key={i}>
                                                            <td><p>Sunday</p></td>
                                                            <td><p>{day.startTime}</p></td>
                                                            <td><p>{day.endTime}</p></td>
                                                        </tr>
                                                    )}

                                                {mondays &&
                                                    mondays.length > 0 &&
                                                    mondays.map((day, i) =>
                                                        <tr key={i}>
                                                            <td><p>Monday</p></td>
                                                            <td><p>{day.startTime}</p></td>
                                                            <td><p>{day.endTime}</p></td>
                                                        </tr>
                                                    )}

                                                {tuesdays &&
                                                    tuesdays.length > 0 &&
                                                    tuesdays.map((day, i) =>
                                                        <tr key={i}>
                                                            <td><p>Tuesday</p></td>
                                                            <td><p>{day.startTime}</p></td>
                                                            <td><p>{day.endTime}</p></td>
                                                        </tr>
                                                    )}

                                                {wednesdays &&
                                                    wednesdays.length > 0 &&
                                                    wednesdays.map((day, i) =>
                                                        <tr key={i}>
                                                            <td><p>Wednesday</p></td>
                                                            <td><p>{day.startTime}</p></td>
                                                            <td><p>{day.endTime}</p></td>
                                                        </tr>
                                                    )}

                                                {thursdays &&
                                                    thursdays.length > 0 &&
                                                    thursdays.map((day, i) =>
                                                        <tr key={i}>
                                                            <td><p>Thrusday</p></td>
                                                            <td><p>{day.startTime}</p></td>
                                                            <td><p>{day.endTime}</p></td>
                                                        </tr>
                                                    )}

                                                {fridays &&
                                                    fridays.length > 0 &&
                                                    fridays.map((day, i) =>
                                                        <tr key={i}>
                                                            <td><p>Friday</p></td>
                                                            <td><p>{day.startTime}</p></td>
                                                            <td><p>{day.endTime}</p></td>
                                                        </tr>
                                                    )}

                                            </tbody>
                                        </table>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 5 how to join */}
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
                                        <Link to="/">এখানে ক্লিক করুন</Link>
                                    </div>
                                </Collapse>
                            </div>

                            {/* faq 6 help line */}
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
                                        <Link to="/help-line">এখানে ক্লিক করুন</Link>
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
