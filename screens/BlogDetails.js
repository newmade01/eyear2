import React, { Component } from 'react';

import { Button, View, Text } from 'react-native';

 

class BlogDetails extends Component {

  render() {

    const { postId, otherParam } = this.props.route.params;

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        

      

        <Text>{otherParam}</Text>

 

        <Button

            title="3번째 화면으로 전환"

            onPress={() => {

              this.props.navigation.navigate('Blog');

            }}

          />

      </View>

    );

  }

}

 

export default BlogDetails;