import React from 'react';
import {View, StyleSheet,Image} from 'react-native';

const ImgBackground = () => {
    return (
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/child.png')}
            resizeMode="cover"
            style={{width: 200, height: 200, marginTop: 10,}}
          />
        </View>
    );
}

const styles = StyleSheet.create({})

export default ImgBackground;
