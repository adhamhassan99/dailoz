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
        marginVertical: 13,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
      <Text>ListItem</Text>
    </View>
  );
};

export default ListItem;
