import { EMPLOYEE_LIST_FETCH_SUCCESS } from '../action/types'

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case EMPLOYEE_LIST_FETCH_SUCCESS:
            return actions.payload; // getting the emplyee list in form of object and saving that data as a object
        default:
            return state;
    }
};