import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';



class addMic extends Component {

    render() {

        const { postId, otherParam } = this.props.route.params;

        return (

            <View style={{ height: 900, backgroundColor: 'blue' }}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{
                        flexDirection: 'row', width: 70, height: 21, borderRadius: 4, backgroundColor: "#5d9295"
                    }}>
                        <Text style={{ width: 51, height: 12, fontFamily: "SpoqaHanSans", fontSize: 11, fontWeight: "bold", fontStyle: "normal", lineHeight: 8, letterSpacing: 0, textAlign: "center", color: "#ffffff", flex: 1, flexDirection: 'row', }}>
                            언어설정
            </Text>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, }}>
                        <Text style={{ color: 'white', width: 69, height: 53, fontFamily: "SFUIDisplay", fontSize: 40, fontWeight: "900", fontStyle: "normal", lineHeight: 45, letterSpacing: 0.71, textAlign: "left", flex: 1, flexDirection: 'row', }}>
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
                    <Text style={{ width: 186, height: 80, fontFamily: "NanumSquare_acR", fontSize: 20, fontWeight: "normal", fontStyle: "normal", textAlign: "center", letterSpacing: 0, textAlign: "center", color: "#000000" }}>
                        자주 듣는 음성 등록하기
          </Text>

                    <View style={styles.centerpop}>
                        <Text>마이크 버튼을 누른 후 아래의 글자를 똑같이 읽어주세요.</Text>

                        <View style={styles.centerpop2}>
                            <Text>이번 겨울은 참 추울 것 같네요.</Text>
                        </View>

                        <View style={styles.micBT}>
                            <View style={styles.micBT2}></View>
                        </View>
                    </View>




                </View>



                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.bottomBT}>

                        <Button
                            title="경고음 등록하기"
                            onPress={() => {
                                this.props.navigation.navigate('warningSoundToVib', {

                                });
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

    centerpop: {
        width: 291,
        height: 261,
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


    centerpop2: {
        width: 265,
        height: 89,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#707070"
    },

    micBT:{
        width: 55,
        height: 55,
        backgroundColor: "#5d9295"
    },

    micBT2:{
        width: 32,
  height: 38,
  backgroundColor: "#ffffff"

    }


});

export default addMic;