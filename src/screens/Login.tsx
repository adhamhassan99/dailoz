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
      <Pressable style={styles.lgBtn}>
        <Text>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Signup')}
        style={styles.presCont}>
        <Text>Don’t have an account? </Text>
        <Text>Sign Up</Text>
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
  presCont: {flexDirection: 'row'},
  mainText: {
    alignSelf: 'flex-start',
    fontSize: 36,
    fontWeight: '600',
    color: '#5B67CA',
    marginBottom: 50,
  },
  lgBtn: {
    backgroundColor: '#5B67CA',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 20,
  },
});
