import React, { Component } from 'react';
import { Linking, TouchableOpacity, useEffect, WebView, Button, View, Text } from 'react-native';





class warningSoundToVib extends Component {

    render() {

        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>경고음 울리면 진동 발생</Text>
                <Text>sound_recorder.py: 사운드 10초 저장해서 머신러닝으로 사운드 인식</Text>
                <Text>일단, 1.소리 인식하면 어떤 종류의 경고음인지 색과 이름 화면에 띄움</Text>
                <Text>일단, 2.진동 울리기 기능 추가</Text>


                <TouchableOpacity onPress={() => Linking.openURL('https://warningsoung-qqbsj.run.goorm.io/warningSoung/index.html')}>
                    <Text style={{ color: 'red' }}>
                        소리 인식테스트 하기
                    </Text>
                </TouchableOpacity>

            </View>




        );

    }

}



export default warningSoundToVib;