import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchEmployeeListActionCreator } from '../action';
import ListItem from './ListItem';


class EmployeeList extends Component {

    componentWillMount() {
        this.props.fetchEmployeeListActionCreator();
        this.createDataSource(this.props);
    }

    // LifeCycle method called when we recive new props. Called with updated props
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props this component will be rendered with
        // this.props is the still oldest props

        this.createDataSource(nextProps);  // nextProps is the updated props
    }

    // Helper method to create listview data source
    createDataSource({ employeeArray }) {
        // Creating List View
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(employeeArray);
    }
    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    // we get each array object in the renderrow method
    renderRow(eachEmployee) {
        return <ListItem employee={eachEmployee} /> // Passing each employee object as a prop to our list item.
    }
}


const mapStateToProps = ({ employeeList }) => {  // Here employeelist is the object of employee.
    // Method to convert object containing set of objects in to an arrary.
    const employeeArray = _.map(employeeList, (val, uid) => {
        return { ...val, uid }; // each object which is being insterted in array will look like this -> {name: 'Zishan', phone: '1322456', shift:'Monday', uid: 'gsvahdbjfgkhlj'}
    });
    return { employeeArray };
}

export default connect(mapStateToProps, { fetchEmployeeListActionCreator })(EmployeeList);