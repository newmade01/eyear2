import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';



class addVoice extends Component {

  render() {

    const { postId, otherParam } = this.props.route.params;

    return (

      <View style={{ height: 900, backgroundColor: 'blue' }}>
        <View style={{ flex: 1, flexDirection: 'row', }}>
          <View style={{
            flexDirection: 'row', width: 70, height: 21, borderRadius: 4, backgroundColor: "#5d9295"
          }}>
            <Text style={{ width: 51, height: 12, fontFamily: "SpoqaHanSans", fontSize: 11, fontWeight: "bold", fontStyle: "normal",  lineHeight: 8,  letterSpacing: 0,  textAlign: "center",   color: "#ffffff", flex: 1,  flexDirection: 'row', }}>
              언어설정
            </Text>
          </View>

          <View style={{flexDirection: 'row', flex: 1,}}>
            <Text style={{color: 'white', width: 69, height: 53, fontFamily: "SFUIDisplay", fontSize: 40, fontWeight: "900", fontStyle: "normal", lineHeight: 45, letterSpacing: 0.71, textAlign: "left", flex: 1, flexDirection: 'row',}}>
              LOE
            </Text>
          </View>
          <View style={{}}>
            <Text style={{ width: 24.8, height: 25.5, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0)" }}>
              Set
           </Text>
          </View>
        </View>

        <View style={{ height: 512, borderRadius: 6, backgroundColor: "#ffffff", shadowColor: "rgba(10, 31, 68, 0.12)", shadowOffset: { width: 0, height: 18 }, shadowRadius: 18, shadowOpacity: 1 }}>
          <Text style={{ width: 186, height: 80, fontFamily: "NanumSquare_acR",fontSize: 20, fontWeight: "normal", fontStyle: "normal", textAlign: "center", letterSpacing: 0,  textAlign: "center", color: "#000000" }}>
            자주 듣는 음성 등록하기
          </Text>

          <View style={{ width: 31, height: 31, backgroundColor: "#5d9295"}}>
            <Button
              title="+"
              onPress={() => {
                this.props.navigation.navigate('AddMic', {});
            }}
            />
          </View>

         
        </View>


        
        <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.bottomBT}>

                        <Button
                            title="경고음 등록하기"
                            onPress={() => {
                                this.props.navigation.navigate('warningSoundToVib', {});
                            }}
                        />
                    </View>

                    <View style={styles.bottomBT}>

                        <Button
                            title="음성 등록하기"
                            onPress={() => {
                                this.props.navigation.navigate('addVoice', {
                                  
                                });
                            }}
                        />
                    </View>

                    < View style={styles.bottomBT}>

                        <Button
                            title="speech to text"
                            onPress={() => {
                                this.props.navigation.navigate('speechToText', {
                             
                                });
                            }}
                        />
                    </View>

                    < View style={styles.bottomBT}>

                        <Button
                            title="전체 창 키우기"
                            onPress={() => {
                                this.props.navigation.navigate('addVoice', {
                            
                                });
                            }}
                        />
                    </View>
                </View>

                <View>
                    <Text style={{
                        width: 44,
                        height: 9,
                        fontFamily: "NanumSquare_acR",
                        fontSize: 8,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        lineHeight: 9,
                        letterSpacing: 0,
                        textAlign: "center",
                        color: "rgba(245, 245, 245, 0.54)"
                    }}>
                        피드백 보내기
                    </Text>

                    <View style={{
                        width: 54,
                        height: 4,
                        opacity: 0.14,
                        borderRadius: 100,
                        backgroundColor: "#ffffff"
                    }}>
                    </View>
                </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({

    bottomBT: {
        color: 'black',
        width: 83,
        height: 61,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(10, 31, 68, 0.12)",
        shadowOffset: {
            width: 0,
            height: 18
        },
        shadowRadius: 18,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#707070"
    },

});

export default addVoice;