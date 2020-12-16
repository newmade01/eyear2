import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



class speechToText extends Component {

  render() {

    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>음성에서 텍스트 전환</Text>
        <Text>transcribe_streaming_mic.py: 실시간 text출력</Text>
      </View>

    );

  }

}



export default speechToText;