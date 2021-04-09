// gesture handler should be first
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation';
import Home from './home';

// all views in the app will be inside the NavigationContainer
// StackedNavigator allows you to transition between screens of app
// also ensures that it is consistent on both ios and android

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
