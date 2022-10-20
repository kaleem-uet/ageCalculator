import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Divider} from 'react-native-paper';

const Result = ({ageDays, ageMonths, ageYears}) => {
 
return (
  <View style={{marginTop: 10}}>
  <View style={{alignItems: 'center'}}>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>AGE IS</Text>
    </View>
    <View style={{marginTop: 10}}>
      <Text style={styles.textStyle}>
        {ageYears}
        {ageYears > 1 ? ' Years ' : ' Year '} {ageMonths}
        {ageMonths > 1 ? ' Months ' : ' Month '}
        {ageDays}
        {ageDays > 1 ? ' days ' : ' day '}
      </Text>
    </View>
    {/* <View style={styles.titleContainer}>
      <Text style={styles.titleText}>AGE IN DAYS</Text>
    </View>
    <View style={{marginTop: 10}}>
      <Text style={styles.textStyle}> 19 Years ,6 Months,19 Days</Text>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>AGE IN WEEKS</Text>
    </View>
    <View style={{marginTop: 10}}>
      <Text style={styles.textStyle}>
        {' '}
        {ageYears * 12} ,19 Days,0 Hours
      </Text>
    </View> */}
  </View>
  <Divider bold={true} style={{marginTop: 10}} />
</View>
)  
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#00cd7c',
    width: '50%',
    height: 35,
    justifyContent: 'center',
    padding: 5,
    marginTop: 10,
    borderRadius: 20,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Result;
