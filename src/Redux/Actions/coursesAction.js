import {
    SECTION_REQUEST,
    GET_SECTION_SUCCESS,
    GET_SECTION_FAILED,

    COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILED,

    CART_COURSES_REQUEST,
    CART_COURSES_SUCCESS,
    CART_COURSES_FAILED,

    COURSE_ADD,
    COURSE_ADD_FAILED,
    // COURSE_FILTER_REQUEST,
    // COURSE_FILTER_SUCCESS,
    // COURSE_FILTER_FAILED

} from '../types';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';

export const sectionList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: SECTION_REQUEST })
            const response = await axios.get(`${apiURL}sections`)
            dispatch({
                type: GET_SECTION_SUCCESS,
                payload: response.data.sections
            })
        } catch (error) {
            dispatch({
                type: GET_SECTION_FAILED,
                payload: error.message
            })
        }
    }
}

export const coursesList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: COURSE_REQUEST })
            const response = await axios.get(`${apiURL}courses`)
            dispatch({
                type: GET_COURSE_SUCCESS,
                payload: response.data.items
            })
        } catch (error) {
            dispatch({
                type: GET_COURSE_FAILED,
                payload: error.message
            })
        }
    }
}

// export const filterCourse = (id) => {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: COURSE_FILTER_REQUEST })
//             dispatch({
//                 type: COURSE_FILTER_SUCCESS,
//                 payload: id
//             })
//         } catch (error) {
//             dispatch({
//                 type: COURSE_FILTER_FAILED,
//                 payload: error.message
//             })
//         }
//     }
// }

export const cartCoursesList = () => {
    return async (dispatch) => {
        try {
            const header = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
            dispatch({ type: CART_COURSES_REQUEST })
            const response = await axios.get(`${apiURL}learners/pre-registration/courses`, header)
            dispatch({
                type: CART_COURSES_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: CART_COURSES_FAILED,
                payload: error.message
            })
        }
    }
}

export const addCourse = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: COURSE_ADD, payload: data })
        } catch (error) {
            dispatch({
                type: COURSE_ADD_FAILED,
                payload: error.message
            })
        }
    }
}