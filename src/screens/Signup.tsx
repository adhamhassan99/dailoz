import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {LoginStackParamList} from '../navigators/LoginStack';

type Props = {
  navigation: NavigationProp<LoginStackParamList>;
};

const Signup = ({navigation}: Props) => {
  return (
    <View>
      <Text>Signup</Text>
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={{flexDirection: 'row'}}>
        <Text>Have any account? </Text>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Signup;
