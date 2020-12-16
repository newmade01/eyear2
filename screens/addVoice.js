import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



class addVoice extends Component {

  render() {

    const { postId, otherParam } = this.props.route.params;

    return (

      <View style={{ height: 812, backgroundColor: 'blue' }}>



        <Text style={{
          width: 69,
          height: 53,
          fontFamily: "SFUIDisplay",
          fontSize: 40,
          fontWeight: "900",
          fontStyle: "normal",
          lineHeight: 45,
          letterSpacing: 0.71,
          textAlign: "left",
          color: 'white'
        }}>
          LOE
        </Text>

        <Text style={{ width: 24.8, height: 25.5, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0)" }}>
          Set
        </Text>

        <View style={{ height: 512, borderRadius: 6, backgroundColor: "#ffffff", shadowColor: "rgba(10, 31, 68, 0.12)", shadowOffset: { width: 0, height: 18 }, shadowRadius: 18, shadowOpacity: 1 }}>
          <Text style={{
            width: 186,
            height: 22,
            fontFamily: "NanumSquare_acR",
            fontSize: 20,
            fontWeight: "normal",
            fontStyle: "normal",
            textAlign: "center",
            letterSpacing: 0,
            textAlign: "center",
            color: "#000000"
          }}>
            자주 듣는 음성 등록하기
          </Text>
          <View style={{
            width: 31,
            height: 31,
            backgroundColor: "#5d9295"
          }}>
            <Button
              title="+버튼"
              onPress={() => {
                this.props.navigation.navigate('speechToText');
              }}
            />
          </View>

          <Button
            title="1.speech to text화면으로 전환 버튼"
            onPress={() => {
              this.props.navigation.navigate('speechToText');
            }}
          />

          <Button
            title="2.경고음 들리면 진동울리기 화면 버튼"
            onPress={() => {
              this.props.navigation.navigate('warningSoundToVib');
            }}
          />


        </View>



      </View>

    );

  }

}



export default addVoice;