import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = ({ children, style }) => {
    return (
        <View style={[styles.cardSectionStyle, style]}>{/* Here we are passing the style on the left to override the style on the right in the array */}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position:'relative'
    }
});


export { CardSection };  // Can be also written as { Header : Header} but in ES6 if key and value is same name can be written like this.