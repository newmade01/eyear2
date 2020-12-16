import React, { Component } from 'react';

import { StyleSheet, Button, View, Text } from 'react-native';



class Home extends Component {

    render() {

        return (


            <View style={{ height: 812, backgroundColor: 'blue'  }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', width: 51, height: 12, fontFamily: "SpoqaHanSans", fontSize: 11, fontWeight: "bold", fontStyle: "normal", lineHeight: 30, letterSpacing: 0,textAlign: "center",
                    }}>
                        언어설정
                    </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', width: 69, height: 53, fontFamily: "SFUIDisplay", fontSize: 40, fontWeight: "900", fontStyle: "normal", lineHeight: 45, letterSpacing: 0.71, textAlign: "left" }}>
                        LOE
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: 24.8, height: 25.5, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0)" }}>
                        Set
                </Text>
                </View>

                <View style={{ width: 291, height: 255, borderRadius: 6, backgroundColor: "#ffffff", shadowColor: "rgba(10, 31, 68, 0.12)", shadowOffset: { width: 0, height: 18 } }}>
                    <Text style={{ width: 204,height: 44, fontFamily: "NanumSquare_acR",  fontSize: 20,  fontWeight: "normal", fontStyle: "normal",lineHeight: 22, letterSpacing: 0, textAlign: "center", color: "#707070"
                    }}>
                        해당 앱 백그라운드 사용을 허가하시겠습니까?
                    </Text>
                    <View style={styles.centerBT}>
                        <Button
                            title="허용"
                            onPress={() => {
                                this.props.navigation.navigate('addVoice', {
                                    postId: 3006,
                                    otherParam: 'Pass whatever you want here',
                                });
                            }}
                        />
                    </View>

                    <View style={styles.centerBT}>
                        <Button
                            title="나중에 하기"
                            onPress={() => {
                                this.props.navigation.navigate('addVoice', {
                                    postId: 3006,
                                    otherParam: 'Pass whatever you want here',
                                });
                            }}
                        />
                    </View>
                </View>

                <View>
                    <View style={styles.bottomBT}>

                        <Button
                            title="경고음"
                            onPress={() => {
                                this.props.navigation.navigate('addVoice', {
                                    postId: 3006,
                                    otherParam: 'Pass whatever you want here',
                                });
                            }}
                        />
                    </View>

                    <View style={styles.bottomBT}>

                        <Button
                            title="음성등록"
                            onPress={() => {
                                this.props.navigation.navigate('addVoice', {
                                    postId: 3006,
                                    otherParam: 'Pass whatever you want here',
                                });
                            }}
                        />
                    </View>

                    < View style={styles.bottomBT}>

                        <Button
                            title="speech to text"
                            onPress={() => {
                                this.props.navigation.navigate('addVoice', {
                                    postId: 3006,
                                    otherParam: 'Pass whatever you want here',
                                });
                            }}
                        />
                    </View>

                    < View style={styles.bottomBT}>

                        <Button
                            title="전체 창 키우기"
                            onPress={() => {
                                this.props.navigation.navigate('addVoice', {
                                    postId: 3006,
                                    otherParam: 'Pass whatever you want here',
                                });
                            }}
                        />
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
    }


});

export default Home;