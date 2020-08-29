import {
    COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILED,
    COURSE_ADD,
    COURSE_ADD_FAILED
} from '../types';

const initialState = {
    loading: false,
    courses: [],
    error: "",
    success: false,
    success_failed: false  
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
                courses: action.payload
            }
        case GET_COURSE_FAILED:
            return {
                ...state,
                loading: false,
                courses: [],
                error: action.payload
            }

        case COURSE_ADD:
            let courseAlreadyExists = state.courses.find(x => x.id === action.payload.id);
            if (courseAlreadyExists) {
                return {
                    ...state,
                    success_failed: true,
                    success: false
                }
            } else {
                return {
                    ...state,
                    courses: [...state.courses, action.payload],
                    success: true,
                    success_failed: false
                }
            }

        case COURSE_ADD_FAILED:
            return{
                ...state,
                success: false,
                success_failed: true,
            }




        default:
            return state
    }
}