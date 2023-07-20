/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

const ListItem = () => {
  return (
    <View
      style={{
        padding: 20,
        width: '90%',
        alignItems: 'center',
        marginVertical: 10,
        // borderWidth: 1,
        elevation: 1,
      }}>
      <Text>ListItem</Text>
    </View>
  );
};

export default ListItem;
