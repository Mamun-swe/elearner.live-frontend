import React, { useState, useEffect } from 'react';
import '../../Components/styles/payment.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import jwt_decode from "jwt-decode";
import Loader from '../../Components/Loading';

const Payment = () => {
    const { courseId } = useParams()
    const [bar1, setBar1] = useState(true)
    const [bar2, setBar2] = useState(false)
    const [bar3, setBar3] = useState(false)
    const [loading, setLoading] = useState(false)
    const [learnerId, setLearnerId] = useState()
    const [courseInfo, setCourseInfo] = useState({})
    const [cost, setCost] = useState(0.0185)

    const goBox2 = () => {
        setBar1(false)
        setBar2(true)
    }

    const goBox3 = () => {
        setBar1(false)
        setBar2(false)
        setBar3(true)
    }

    const onChangePaymentMethod = event => {
        if (event.target.value === 'bkash') {
            setCost(0.0185)
        }
        if (event.target.value === 'rocket') {
            setCost(0.018)
        }
        if (event.target.value === 'nogod') {
            setCost(0.018)
        }
    }

    const paymentAccounts = (amount, percent) => {
        let total = parseInt(amount) + parseInt(percent) + 1
        return total
    }

    useEffect(() => {
        let token = localStorage.getItem('token')
        let decoded = jwt_decode(token)
        setLearnerId(decoded.userId)

        const fetchCourseInfo = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${apiURL}courses/${courseId}`)
                if (response.status === 200) {
                    setCourseInfo(response.data)
                    setLoading(false)
                    console.log(response.data)
                }
            } catch (error) {
                if (error) console.log(error)
            }
        }
        fetchCourseInfo()

    }, [courseId])



    return (
        <div className="payment p-4">
            {loading ? <Loader /> :

                <div data-aos="fade-zoom">
                    <div className="bar-line">
                        <div className="d-flex">
                            <div className="flex-fill">
                                <div className={bar1 ? "line-box fill-color shadow-sm" : "line-box"}>
                                    <p className="mb-0">Course Details</p>
                                </div>
                            </div>
                            <div className="flex-fill px-2">
                                <div className={bar2 ? "line-box fill-color shadow-sm" : "line-box"}>
                                    <p className="mb-0">Payment</p>
                                </div>
                            </div>
                            <div className="flex-fill">
                                <div className={bar3 ? "line-box fill-color shadow-sm" : "line-box"}>
                                    <p className="mb-0">Status</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {
                        bar1 ?
                            // Selected Course Info
                            <div className="content-box selected-course">
                                <h5 className="mb-0">Learner Info.</h5>
                                <p className="mb-4">Learner ID: {learnerId}</p>

                                <table className="table table-sm table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><h6>Course Name: </h6></td>
                                            <td><h6>{courseInfo.courseName}</h6></td>
                                        </tr>
                                        <tr>
                                            <td><h6>Course Section: </h6></td>
                                            <td><h6>{courseInfo.courseSectionName}</h6></td>
                                        </tr>
                                        <tr>
                                            <td><h6>Course duration: </h6></td>
                                            <td><h6>{courseInfo.courseTotalDurationInDays}</h6></td>
                                        </tr>
                                        <tr>
                                            <td><h6>Course instructor: </h6></td>
                                            <td><h6 className="text-capitalize">{courseInfo.courseInstructorName}</h6></td>
                                        </tr>
                                        <tr>
                                            <td><h6>Course cost: </h6></td>
                                            <td><h6>{courseInfo.coursePriceInTkWithOffer} Tk.</h6></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="text-right">
                                    <button type="button" className="btn text-white next-btn" onClick={goBox2}>Next</button>
                                </div>
                            </div>


                            : bar2 ?
                                // Payment
                                <div className="content-box payment-box">

                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-lg-6">

                                                {/* Method */}
                                                <div className="form-group mb-3">
                                                    <p className="label mb-0">By,</p>
                                                    <select
                                                        className="form-control shadow-none"
                                                        onChange={onChangePaymentMethod}
                                                    >
                                                        <option value="bkash">Bkash</option>
                                                        <option value="rocket">Rocket</option>
                                                        <option value="nogod">Nogod</option>
                                                    </select>
                                                </div>

                                                {/* TrxId */}
                                                <div className="form-group mb-3">
                                                    <p className="label mb-0">TrxId</p>
                                                    <input
                                                        type="text"
                                                        className="form-control shadow-none"
                                                    />
                                                </div>

                                                <div className="payment-to">
                                                    <h6>Payment To,</h6>
                                                    <p>Bkash: 019123456</p>
                                                    <p>Rocket: 019123456</p>
                                                    <p>Nogod: 019123456</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="accounts">
                                                    <div className="d-flex">
                                                        <div>
                                                            <p className="mb-0">Course fee:</p>
                                                        </div>
                                                        <div className="ml-auto"><p>{courseInfo.coursePriceInTkWithOffer} Tk</p></div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div>
                                                            <p className="mb-0">Transaction fee:</p>
                                                        </div>
                                                        <div className="ml-auto"><p>{cost} * {courseInfo.coursePriceInTkWithOffer} Tk</p></div>
                                                    </div>
                                                    <div className="border my-1"></div>
                                                    <div className="d-flex">
                                                        <div>
                                                            <p className="mb-0">Total:</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <p>{paymentAccounts(courseInfo.coursePriceInTkWithOffer, cost * courseInfo.coursePriceInTkWithOffer)} Tk</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 pt-3 text-right">
                                                <button type="button" className="btn text-white next-btn" onClick={goBox3}>Next</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                                : bar3 ?
                                    // Status
                                    <div className="content-box selected-courses">
                                        <p>box 3</p>
                                    </div>
                                    : null
                    }
                </div>
            }
        </div>
    );


};

export default Payment;