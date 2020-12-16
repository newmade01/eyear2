import React, { Component } from 'react';

import { Button, View, Text } from 'react-native';

 

class BlogDetails extends Component {

  render() {

    const { postId, otherParam } = this.props.route.params;

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        

        <Text>Post id is: {postId}</Text>

        <Text>{otherParam}</Text>

 

        <Button

            title="Go to Blog"

            onPress={() => {

              this.props.navigation.navigate('Blog');

            }}

          />

      </View>

    );

  }

}

 

export default BlogDetails;