import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
export default class test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedStartDate: null,
      };
      this.onDateChange = this.onDateChange.bind(this);
    }

    static navigationOptions = {
        header: false
    }
  
    onDateChange(date) {
      this.setState({
        selectedStartDate: date,
      });
    }

    render() {
      const { selectedStartDate } = this.state;
      const startDate = selectedStartDate ? selectedStartDate.toString() : '';
      return (
        <View style={styles.container}>
          <CalendarPicker
            onDateChange={this.onDateChange}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  });

