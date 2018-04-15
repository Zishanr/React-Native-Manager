import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

/* Makinig Reusable Input Component */

const Input = ({ inputLabel, value, onChangeText, placeholder, secureTextEntry }) => {

    const {
        inputContainerStyle,
        inputLabelStyle,
        inputStyle
    } = styles;


    return (
        <View style={inputContainerStyle}>
            <Text style={inputLabelStyle}>{inputLabel}</Text>{/* OnChangeText takes a callback function and pass the text to this function as a argument*/}
            <TextInput
                style={inputStyle}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                placeholder={placeholder}
                autoCorrect={false}>
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainerStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'

    },

    inputLabelStyle: {
        fontSize: 15,
        color: '#000',
        flex: 0.7,
        paddingLeft: 20
    },
    inputStyle: {
        color: '#000',
        flex: 2.3,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23


    }
});

export { Input };  // Can be also written as { Input : Input} but in ES6 if key and value is same name can be written like this.