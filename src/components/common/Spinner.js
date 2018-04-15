import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const Spinner = ({ size }) => {
    return (
        
            <ActivityIndicator size={size || 'large'} />
        
    );
};

const styles = StyleSheet.create({
    spinnerContainerStyle: {
        flex: 1,

    }
});
export { Spinner };

