import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Lock from '../../../assets/icons/Lock.svg';
import Message from '../../../assets/icons/Message.svg';
import Hide from '../../../assets/icons/Hide.svg';

type Props = {
  placeholder: string;
  secure?: boolean;
};

const InputField = ({placeholder, secure}: Props) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[styles.mainView, focus ? styles.focused : null]}>
      {secure ? <Lock /> : <Message />}
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={secure && !showPassword}
        cursorColor={'#5B67CA'}
        placeholderTextColor={'#C6CEDD'}
        placeholder={placeholder}
        style={styles.input}
      />
      {secure && (
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Hide />
        </Pressable>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    borderBottomColor: '#E3E8F1',
    borderBottomWidth: 1,
    paddingBottom: 10,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    padding: 0,
    fontSize: 16,
    flex: 1,
  },
  focused: {
    borderBlockColor: '#5B67CA',
  },
});
