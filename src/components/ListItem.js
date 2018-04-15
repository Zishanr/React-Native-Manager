import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    render() {

        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onListItemPressed.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.listItemStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    //Helper method for on list iteam clicked
    onListItemPressed() {
        const { employee } = this.props;
        Actions.employeeEdit({ employee }); // Passing employee props from Employee edit screne to antoher screne -> (Employee create screne)
    }
}

const styles = StyleSheet.create({
    listItemStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default ListItem;