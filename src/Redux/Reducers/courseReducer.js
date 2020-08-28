import {
    COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILED,
    ADD_COURSE,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_FAILED
} from '../types';

const initialState = {
    loading: false,
    courses: [],
    count: 0,
    error: ""
}


export default function (state = initialState, action) {
    switch (action.type) {
        case COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: action.payload,
                count: state.count
            }
        case GET_COURSE_FAILED:
            return {
                ...state,
                loading: false,
                courses: [],
                error: action.payload
            }
        case ADD_COURSE:
            return {
                ...state,
                // courses: state.courses + action.payload
                count: state.count + action.payload
            }


        default:
            return state
    }
}