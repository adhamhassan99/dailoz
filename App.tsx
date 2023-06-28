/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import LoginStack from './src/navigators/LoginStack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
}

export default App;
