import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={{}}>
      <View style={{flex:1,alignItems:"center",marginTop:10,backgroundColor:"black",height:50,justifyContent:"center",
      elevation:30, shadowColor:"white",shadowRadius:20,
      }}>
        <Text style={{color: 'white',fontWeight:"700",fontSize:18}}>Age Calculator</Text>
         
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
