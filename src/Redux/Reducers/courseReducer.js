import {
    CART_COURSES_FAILED,
    CART_COURSES_REQUEST,
    CART_COURSES_SUCCESS,
    COURSE_ADD,
    COURSE_ADD_FAILED,
    COURSE_REQUEST,
    GET_COURSE_FAILED,
    GET_COURSE_SUCCESS,
    GET_SECTION_FAILED,
    GET_SECTION_SUCCESS,
    SECTION_REQUEST,
} from '../types';
import axios from 'axios';
import {apiURL} from '../../utils/apiURL';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({autoClose: 2000})


const initialState = {
    loading: false,
    sections: [],
    courses: [],
    cartCourses: [],
    error: "",
    success: false,
    add_success: "",
    filteredCourse: {}
}


export default function (state = initialState, action) {
    switch (action.type) {

        // All Section
        case SECTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                sections: action.payload
            }
        case GET_SECTION_FAILED:
            return {
                ...state,
                loading: false,
                sections: [],
                error: action.payload
            }


        // All Courses
        case COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: action.payload
            }
        case GET_COURSE_FAILED:
            return {
                ...state,
                loading: false,
                courses: [],
                error: action.payload
            }

        // Course Filter
        // case COURSE_FILTER_REQUEST:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case COURSE_FILTER_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         filteredCourse: {...state.courses.find(x => x.id == action.payload)}
        //     }
        // case COURSE_FILTER_FAILED:
        //     return {
        //         ...state,
        //         loading: false,
        //         courses: [],
        //         error: action.payload
        //     }

        // All Cart Courses
        case CART_COURSES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CART_COURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                cartCourses: action.payload
            }
        case CART_COURSES_FAILED:
            return {
                ...state,
                loading: false,
                cartCourses: [],
                error: action.payload
            }

        // New Course Add
        case COURSE_ADD:
            let courseAlreadyExists = state.cartCourses.find(x => x.courseId === action.payload.courseId);
            if (courseAlreadyExists) {
                toast.warn('This course already enrolled')
                return {
                    ...state,
                    add_success: false,
                }
            } else {
                // Header
                const header = {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }
                let data = { 'HTTP_CONTENT_LANGUAGE': 'en-US' }

                axios.put(`${apiURL}learners/courses/${action.payload.courseId}/pre-registration`, data, header)
                    .then(res => {
                        if (res.status === 201) {
                            toast.success('Successfully added')
                        }
                    })
                    .catch(error => {
                        if (error) {
                            return {
                                ...state,
                                add_success: false
                            }
                        }
                    })
                return {
                    ...state,
                    cartCourses: [...state.cartCourses, action.payload],
                    add_success: true
                }

            }
        case COURSE_ADD_FAILED:
            return {
                ...state,
                add_success: false
            }

        default:
            return state
    }
}