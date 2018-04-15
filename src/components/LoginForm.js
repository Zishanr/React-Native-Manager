import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChangedActionCreator, passwordChangedActionCreator, loginUserActionCreator } from '../action';

class LoginForm extends Component {
    render() {
        console.log(this.props);
        const { email, password, error } = this.props; // Destructring props 
        return (
            <Card>
                <CardSection>
                    <Input
                        inputLabel="Email"
                        placeholder="example@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={email}
                    />{/* OnChangeText takes a callback function and pass the text to this function as a argument*/}
                </CardSection>

                <CardSection>
                    <Input
                        inputLabel="Password"
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {error}
                </Text>

                {this.renderButton()}{/* JSX */}

            </Card>
        );
    }

    // OnChangeText takes a callback function and pass the text to this function as a argument
    onEmailChanged(text) {
        this.props.emailChangedActionCreator(text);
    }

    // OnChangeText takes a callback function and pass the text to this function as a argument
    onPasswordChanged(text) {
        this.props.passwordChangedActionCreator(text);
    }

    // Helper method
    onLoginButtonPressed() {
        const { email, password } = this.props;
        this.props.loginUserActionCreator(email, password) // Why passing object ?????
    }

    // Helper method to show button or spinner.
    renderButton() {
        if (this.props.showProgressBar)
            return <Spinner size="large" />

        return (<Button onPress={this.onLoginButtonPressed.bind(this)}>
            Login
        </Button>)
    }

}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
});

const mapStateToProps = ({ auth }) => { // auth = state.auth
    const { email, password, error, showProgressBar } = auth; // Destructring state.
    return { email, password, error, showProgressBar };
}

export default connect(mapStateToProps, {
    emailChangedActionCreator,
    passwordChangedActionCreator,
    loginUserActionCreator
})(LoginForm); // sending action in destructring form.