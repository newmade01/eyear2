import React, { Component } from 'react';

import { Button, View, Text } from 'react-native';



class Home extends Component {

    render() {

        return (
            

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>

                <Text style={{ color: 'white' }}>LOE</Text>
                

                <Button 

                    title="다음 화면으로 버튼 누르기"

                    onPress={() => {

                        this.props.navigation.navigate('BlogDetails', {

                            postId: 3006,

                            otherParam: 'Pass whatever you want here',

                        });

                    }}

                />

            </View>

        );

    }

}



export default Home;