import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Playground from '../screens/Playground';

export type LoginStackParamList = {
  welcomeScreen: undefined;
  Login: undefined;
  Signup: undefined;
  Playground: undefined;
};

const LoginStackNav = createNativeStackNavigator<LoginStackParamList>();
const LoginStack = () => {
  return (
    <LoginStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStackNav.Screen name="Playground" component={Playground} />
      <LoginStackNav.Screen name="welcomeScreen" component={WelcomeScreen} />
      <LoginStackNav.Screen name="Login" component={Login} />
      <LoginStackNav.Screen name="Signup" component={Signup} />
    </LoginStackNav.Navigator>
  );
};

export default LoginStack;
