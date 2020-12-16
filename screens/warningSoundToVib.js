import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



class warningSoundToVib extends Component {

  render() {

    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>경고음 울리면 진동 발생</Text>

      </View>

    );

  }

}



export default warningSoundToVib;