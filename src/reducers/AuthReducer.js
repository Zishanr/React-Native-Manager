import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    PROGRESS_BAR
} from '../action/types'

const INTIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    showProgressBar: false
}; // Intial value of state also tells different state available.

export default (state = INTIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };  // ...state is the props of old state and returning new state object.
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INTIAL_STATE, user: action.payload }  // On Successfull Login setting states to intia value. Here first setting state values, than setting intial vales of the state and than setting value of user
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', showProgressBar: false };
        case PROGRESS_BAR:
            return { ...state, showProgressBar: true, error: '' };
        default:
            return state;
    }
};