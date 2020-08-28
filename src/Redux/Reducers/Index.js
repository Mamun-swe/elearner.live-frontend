import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
// import categoryReducer from './categoryReducer';
// import albumsReducer from './albumsReducer';
// import singersReducer from './singersReducer';
// import songsReducer from './songsReducer';
// import usersReducer from './usersReducer';

export default combineReducers({
    courses: courseReducer
    // categories: categoryReducer,
    // albums: albumsReducer,
    // singers: singersReducer,
    // songs: songsReducer,
    // users: usersReducer
})