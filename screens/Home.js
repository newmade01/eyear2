import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';



class Home extends Component {

    render() {

        return (


            <View style={{ height: 900, backgroundColor: 'blue' }}>
                <View>
                    <Text style={styles.clock}>  </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.top}>
                        <Text style={styles.langBT}>
                            언어설정
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row', flex: 1,
                    }}>
                        <Text style={styles.nameHead}>
                            LOE
                        </Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.setBT}>  Set
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', width: 291, height: 255, borderRadius: 6, backgroundColor: "#ffffff", shadowColor: "rgba(10, 31, 68, 0.12)", shadowOffset: { width: 0, height: 18 } }}>
                    <Text style={{
                        width: 204, height: 44, fontFamily: "NanumSquare_acR", fontSize: 20, fontWeight: "normal", fontStyle: "normal", lineHeight: 22, letterSpacing: 0, textAlign: "center", color: "#707070"
                    }}>
                        해당 앱 백그라운드 사용을 허가하시겠습니까?
                    </Text>
                    <View style={styles.centerBT}>
                        <Button
                            title="허용버튼"
                            
                        />
                    </View>

                    <View style={styles.centerBT}>
                        <Button
                            title="나중에 하기 (누르면 앱종료)"
                            onPress ={
                                ()=>{
                                console.log('clicked');
                                return BackHandler.exitApp();
                                }
                            }
                        />
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
    top: {
        flexDirection: 'row', width: 70, height: 21, borderRadius: 4, backgroundColor: "#5d9295"

    },


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

    centerBT: {
        width: 130,
        height: 68,
        borderRadius: 6,
        backgroundColor: "#5d9295",
        shadowColor: "rgba(10, 31, 68, 0.12)",
        shadowOffset: {
            width: 0,
            height: 18
        },
        shadowRadius: 18,
        shadowOpacity: 1
    },

    langBT: {
        width: 51,
        height: 12,
        fontFamily: "SpoqaHanSans",
        fontSize: 11,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 8,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff",
        flex: 1,
        flexDirection: 'row',
    },

    nameHead: {
        color: 'white', width: 69, height: 53, fontFamily: "SFUIDisplay", fontSize: 40, fontWeight: "900", fontStyle: "normal", lineHeight: 45, letterSpacing: 0.71, textAlign: "left", flex: 1, flexDirection: 'row',

    },

    setBT: {
        width: 24.8, height: 25.5, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0)",

    },

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

    fix:{
        width: 42,
        height: 15,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#707070",
        
    },





});

export default Home;