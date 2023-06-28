import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {LoginStackParamList} from '../navigators/LoginStack';

type Props = {
  navigation: NavigationProp<LoginStackParamList>;
};

const Login = ({navigation}: Props) => {
  return (
    <View>
      <Text>Login</Text>
      <Pressable
        onPress={() => navigation.navigate('Signup')}
        style={{flexDirection: 'row'}}>
        <Text>Don’t have an account? </Text>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default Login;
