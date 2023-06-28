/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import images from '../assets/images';
import {NavigationProp} from '@react-navigation/native';
import {LoginStackParamList} from '../navigators/LoginStack';

type Props = {
  navigation: NavigationProp<LoginStackParamList>;
};

const WelcomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Image
        style={{marginTop: 150, marginBottom: 40}}
        source={images.WelcomeImg}
      />
      <Image style={{marginBottom: 20}} source={images.Logo} />
      <Text
        style={{
          maxWidth: '90%',
          textAlign: 'center',
          color: '#2C406E',
        }}>
        Plan what you will do to be more organized for today, tomorrow and
        beyond
      </Text>
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#5B67CA',
          width: '75%',
          padding: 15,
          alignItems: 'center',
          borderRadius: 14,
          marginTop: 60,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: '700',
          }}>
          Login
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text
          style={{
            color: '#5B67CA',
            fontSize: 17,
            fontWeight: '700',
            marginTop: 25,
          }}>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
