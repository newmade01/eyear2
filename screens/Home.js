import React, { Component } from 'react';

import { Button, View, Text } from 'react-native';

 

class Home extends Component {

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Home screen</Text>

        <Button

            title="Go to Blog Details"

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