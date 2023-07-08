/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {LoginStackParamList} from '../navigators/LoginStack';
import InputField from '../components/molecules/InputField/InputField';

type Props = {
  navigation: NavigationProp<LoginStackParamList>;
};

const Login = ({navigation}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Login</Text>
      <InputField placeholder="Email ID or Username" />
      <InputField secure placeholder="Password" />
      <View style={styles.btnContainer}>
        <Pressable style={e => (e.pressed ? styles.pressedBtn : styles.lgBtn)}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => navigation.navigate('Signup')}
        style={styles.presCont}>
        <Text style={{color: '#2C406E'}}>Don’t have an account? </Text>
        <Text style={{color: '#2C406E', fontWeight: '700'}}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  presCont: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
  },
  mainText: {
    alignSelf: 'flex-start',
    fontSize: 36,
    fontWeight: '700',
    color: '#5B67CA',
    marginBottom: 50,
  },
  lgBtn: {
    backgroundColor: '#5B67CA',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
  },
  pressedBtn: {
    backgroundColor: '#424b95',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  btnContainer: {
    width: '100%',
    marginTop: 80,
    gap: 20,
  },
});
