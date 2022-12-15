import {combineReducers} from 'redux';
import albumReducer from './albumReducers';
// import errorReducer from './errorReducer';
// import authReducer from './authReducer';

export default combineReducers({
    album:albumReducer,
    // error:errorReducer,
    // auth:authReducer
});