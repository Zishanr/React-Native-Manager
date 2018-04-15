import { CREATE_EMPLOYEE, EMPLOYEE_CREATED } from '../action/types'

const INTIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE:
            // action.payload = {prop: 'name', value: 'zishan' } here we are getting an object in payload
            return { ...state, [action.payload.prop]: action.payload.value };  // [action.payload.prop] - key interpolation -> here it is key creator at runtime.
        case EMPLOYEE_CREATED:  // Employee has been created and reset the form value and state to show clear form.
            return { INTIAL_STATE };
        default:
            return state;
    }
};