import React, { Component } from 'react';
import { StyleSheet, Linking, TouchableOpacity, useEffect, WebView, Button, View, Text } from 'react-native';




class speechToText extends Component {

  render() {


    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={styles.clock}>    </Text>

        </View>


        <Text >
          음성을 텍스트로 출력하기, python 출력화면, 구름IDE서버 사용
        </Text>



      </View>




    );

  }

}


const styles = StyleSheet.create({
  clock: {
    width: 54,
    height: 20,
    fontFamily: "SFProText",
    fontSize: 15,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.3,
    textAlign: "center",
    color: "#ffffff"
  },


});


export default speechToText;