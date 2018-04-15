import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducers from './EmployeeFormReducers';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
    auth: AuthReducer,
    createEmployee: EmployeeFormReducers,
    employeeList : EmployeeListReducer
}); 