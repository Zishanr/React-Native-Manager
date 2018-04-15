/* All the Actions of the applications */
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    PROGRESS_BAR
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';  // actions used to navigate from one scene to another using that scene key name.

// Email change action creator -> JavaScript Function
export const emailChangedActionCreator = (emailText) => {
    return {
        type: EMAIL_CHANGED,
        payload: emailText
    };
};

// Password change action creator -> JavaScript Function
export const passwordChangedActionCreator = (passwordText) => {
    return {
        type: PASSWORD_CHANGED,
        payload: passwordText
    };
};

// Aync Action creator to make Login user
export const loginUserActionCreator = (email, password) => {
    return (dispatch) => {  // Action creator returning function -> redux-thunk

        dispatch({
            type: PROGRESS_BAR
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => onLoginSuccess(dispatch, user))
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => onLoginSuccess(dispatch, user))
                    .catch(() => onLoginFail(dispatch));
            });
    };
};


// Helper function to handle login success
const onLoginSuccess = (dispatch, user) => {
    // Callback Function
    dispatch({   // Calling dispatch function manually in .then method and sending action object
        type: LOGIN_USER_SUCCESS,  // Action object
        payload: user
    });

    //Actions.employeeList();  // Navigate from login screen to Employee list screen using action
    Actions.main(); // Calling main scene containg empoyeeList scene
};

// Helper function to handle login fail
const onLoginFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
}