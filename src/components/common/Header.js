import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = ({ headingText }) => {
  return (
    <View style={styles.headerViewStyle}>
      <Text style={styles.headerTextStyle}> {headingText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({ 
  headerViewStyle: {
    height: 57,
    backgroundColor: '#F8F8F8',
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export { Header }; // Can be also written as { Header : Header} but in ES6 if key and value is same name can be written like this.
