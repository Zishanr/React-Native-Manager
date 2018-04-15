import React from 'react';
import { StyleSheet, View } from 'react-native';


const Card = ({ children }) => {
    return (
        <View style={styles.cardStyle}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    }
});

export { Card };  // Can be also written as { Header : Header} but in ES6 if key and value is same name can be written like this.