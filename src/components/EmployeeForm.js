import React, { Component } from 'react';
import { CardSection, Input } from './common';
import { Picker, View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { saveEmployeeDetailActionCreator } from '../action';

class EmployeeForm extends Component {
    render() {
        const { name, phone, shift } = this.props;
        return (
            <View>
                <CardSection>
                    <Input
                        inputLabel='Name'
                        placeholder='Zishan'
                        value={name}
                        onChangeText={value => this.props.saveEmployeeDetailActionCreator({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        inputLabel='Phone'
                        placeholder='555-555-5555'
                        value={phone}
                        onChangeText={value => this.props.saveEmployeeDetailActionCreator({ prop: 'phone', value })}
                    />
                </CardSection>

                {/*<CardSection style={{ flexDirection: 'column' }}>*/}{/* Add custom style to exsting style bu overriding old sttle*/}
                <CardSection >
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={shift}
                        onValueChange={value => this.props.saveEmployeeDetailActionCreator({ prop: 'shift', value })}>

                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        color: 'black'
    }
});

const mapStateToProps = ({ createEmployee }) => {
    const { name, phone, shift } = createEmployee;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { saveEmployeeDetailActionCreator })(EmployeeForm);