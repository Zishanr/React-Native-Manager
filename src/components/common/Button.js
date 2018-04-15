import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({ children, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={styles.loginButtonStyle} onPress={onPress}>
                <Text style={styles.loginTextStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    loginButtonStyle: {
        backgroundColor: '#fff',
        borderColor: '#007aff',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5
    },
    loginTextStyle: {
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10,
        alignSelf: 'center'
    }
});

export { Button }; // Can be also written as { Header : Header} but in ES6 if key and value is same name can be written like this.