import { FETCH_ALBUMS } from '../actions/types';

const initialState={
    items:[],
}


export default function fun(state=initialState,action){
    switch(action.type){
        case FETCH_ALBUMS:
        return {
            ...state,
            items:action.payload
        };
        default:
        return state;
    };
}