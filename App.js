import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Home from './screens/Home';
import addVoice from './screens/addVoice';
import speechToText from './screens/speechToText';
import warningSoundToVib from './screens/warningSoundToVib';
import MicLoading from './screens/MicLoading';
import AddMic from './screens/AddMic';

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

        options={{ headerShown: false }}



      />

      <Stack.Screen

        name="MicLoading"

        component={MicLoading}

        options={{ headerShown: false }}



      />

      <Stack.Screen

        name="AddMic"

        component={AddMic}

        options={{ headerShown: false }}



      />


      <Stack.Screen

        name="addVoice"

        component={addVoice}

        options={{ headerShown: false }}

      />

      <Stack.Screen

        name="speechToText"

        component={speechToText}

        options={{ headerShown: false }}

      />

      <Stack.Screen

        name="warningSoundToVib"

        component={warningSoundToVib}

        options={{ headerShown: false }}

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

