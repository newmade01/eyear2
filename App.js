import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import Home from './screens/Home';
import addVoice from './screens/addVoice';
import speechToText from './screens/speechToText';
import warningSoundToVib from './screens/warningSoundToVib';


const Stack = createStackNavigator();



function NavStack() {

  return (

    <Stack.Navigator

      screenOptions={{

        headerTitleAlign: 'center',

        headerStyle: {

          backgroundColor: '#621FF7',

        },

        headerTintColor: '#fff',

        headerTitleStyle: {

          fontWeight: 'bold',

        },

      }}

    >

      <Stack.Screen

        name="Home"

        component={Home}

        options={{ title: '첫화면' }}

      />

      <Stack.Screen

        name="addVoice"

        component={addVoice}

        options={{ title: 'addVoice' }}

      />

      <Stack.Screen

        name="speechToText"

        component={speechToText}

        options={{ title: 'speechToText' }}

      />

      <Stack.Screen

        name="warningSoundToVib"

        component={warningSoundToVib}

        options={{ title: 'warningSoundToVib' }}

      />

    </Stack.Navigator>

  );

}



export default function App() {

  return (

    <NavigationContainer>

      <NavStack />

    </NavigationContainer>

  );

}

