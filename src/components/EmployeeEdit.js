import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button, ConfirmDialoge } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { saveEmployeeDetailActionCreator, updateEmployeeActionCreator, deleteEmployeeActionCreator } from '../action';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    // Component level State to show model.
    state = { showModel: false };

    // As the component mounted we set the calue of emplye data model in our reducer using our action creator.
    componentWillMount() {
        // Here we are using lodas to iterate employee model object attributes. 
        _.each(this.props.employee, (value, prop) => {
            this.props.saveEmployeeDetailActionCreator({ prop, value });
        });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <Button onPress={this.onSaveButtonPressed.bind(this)}>
                    Save
                </Button>
                <Button onPress={this.onTextButtonPressed.bind(this)}>
                    Text Schedule
                </Button>
                <Button onPress={() => this.setState({ showModel: !this.state.showModel })}>
                    Delete
                </Button>

                <ConfirmDialoge
                    visible={this.state.showModel}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}>{/* Confirm Dialoge wont be visible until we pass the visible prop to true*/}
                    Are you sure you want to delete this record?
                </ConfirmDialoge>
            </Card >
        );
    }

    // Callback function of modal class on accetpting
    onAccept() {
        const { uid } = this.props.employee;
        this.props.deleteEmployeeActionCreator({ uid });
    }

    // Callback function of modal class on declining
    onDecline() {
        this.setState({ showModel: false });  // Setting the state of the model false will make the model diappear on clicking no button.
    }

    // Helper method to update emplyee detail using {updateEmployeeActionCreator} action creator.
    onSaveButtonPressed() {
        const { name, phone, shift } = this.props;
        this.props.updateEmployeeActionCreator({ name, phone, shift, uid: this.props.employee.uid });
    }

    // Helper method for sending text on pressing text button.
    onTextButtonPressed() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`)  // Text interpolation - combining text and variable
    }
}

const mapStateToProps = ({ createEmployee }) => {
    const { name, phone, shift } = createEmployee;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { saveEmployeeDetailActionCreator, updateEmployeeActionCreator, deleteEmployeeActionCreator })(EmployeeEdit);