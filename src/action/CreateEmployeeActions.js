import { CREATE_EMPLOYEE, EMPLOYEE_CREATED, EMPLOYEE_LIST_FETCH_SUCCESS } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


// Action creator to save employee data 
export const saveEmployeeDetailActionCreator = ({ prop, value }) => {
    return {
        type: CREATE_EMPLOYEE,
        payload: { prop, value }
    };
};

// Action creator using redux thunk to add new empoyee to the firbase database
export const createNewEmployeeActionCreator = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    // Asyncrhonus action so using redux thunk and distaptching action object.
    return (dispatch) => {  // Returning a function using Redux-thunk but not using dispatch to return action object.
        firebase.database().ref(`/users/${currentUser.uid}/employees`)  // Path to our json in firebase databse
            .push({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_CREATED
                });
                Actions.employeeList({ type: 'reset' })
            });  // After successfull creation of new employee in firbase we are calling action to naviagte back to Employee list screne
    };
};


// Action creatoe using redux thunk to fetch employees list from firbase database
export const fetchEmployeeListActionCreator = () => {
    const { currentUser } = firebase.auth();

    // Asyncrhonus action so using redux thunk and distaptching action object.
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {  // snapshot - (handler for data) is the object that describe the data in response.
                dispatch({
                    type: EMPLOYEE_LIST_FETCH_SUCCESS,
                    payload: snapshot.val()   // throught [ val() ] we access the data inside the snapshot object.
                });
            });
    }
}

// Action creatoe using redux thunk to update already stored emplyee detail in the firbase.
export const updateEmployeeActionCreator = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        // updating particular emplyee details with that uid of the emplyee record.
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_CREATED
                });
                Actions.employeeList({ type: 'reset' })
            });
    };
}

// Action creator using redux thunk to remove record from the firebase databse.
export const deleteEmployeeActionCreator = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => Actions.employeeList({ type: 'reset' }));
    }
}