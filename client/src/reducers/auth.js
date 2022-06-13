import {REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    //make sure that when we load a user the loading is done, once we receive a response we'll set this to false 
    loading: true,
    user: null
}

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case REGISTER_SUCCESS:
            localStorate = setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
            localStorate.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}
