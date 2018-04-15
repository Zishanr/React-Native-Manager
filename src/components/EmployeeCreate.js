import React, { Component } from 'react';
import { Card, Button } from './common'
import { connect } from 'react-redux';
import { createNewEmployeeActionCreator } from '../action';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    render() {
        return (
            <Card>
                <EmployeeForm {...this.prpos} />{/* Passing all the props of EmployeeCreate component to EmployeeForm component . Also way of passing all props of one compoent to antoher component*/}
                <Button onPress={this.createNewEmployee.bind(this)}>
                    Create
                </Button>
            </Card >
        );
    }

    // Helper Method to create employee on button create pressed.
    createNewEmployee() {
        const { name, phone, shift } = this.props;
        this.props.createNewEmployeeActionCreator({ name, phone, shift: shift || 'Monday' });  // Here if shift is empty than set default value as monday
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.createEmployee;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { createNewEmployeeActionCreator })(EmployeeCreate);