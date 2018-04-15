/* Class for all the scene to navigate*/

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux' // third party library for naivgation
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>{/* sceneStyle is the property of Router component which is used to give global styling to the screen*/}

            <Scene key="auth">{/* Creating scene bucket to contain main scene*/}
                {/* Scene 1 - Login Form* Screne */}
                <Scene
                    key="loginForm"
                    component={LoginForm}
                    title="Login"
                    initial
                />{/* initial prop of scene component to show launcher screne*/}
            </Scene>

            <Scene key="main">
                {/* Scene 2 - Employee List Screne */}
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                    initial
                />
                {/* Scene 3- Employee Create Screne */}
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee" />

                {/* Scene 3- Employee Edit Screne */}
                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit" />

            </Scene>
        </Router>
    );
}

export default RouterComponent;  // Exporting RouterComponent