import React, { Component } from 'react';
import {StyleSheet, Linking, TouchableOpacity, useEffect, WebView, Button, View, Text } from 'react-native';




class MicLoading extends Component {
  
    render() {
      

        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text >
                MicLoading 화면
                </Text>

                < View style={styles.bottomBT}>

                        <Button
                            title="홈으로"
                            onPress={() => {
                                this.props.navigation.navigate('Home', {
                            
                                });
                            }}
                        />
                    </View>
            
       

            </View>




        );

    }

}



export default MicLoading;