/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import ListItem from '../components/ListItem/ListItem';

type Props = {};

const Playground = (props: Props) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const horizontalMargin = useSharedValue(30);
  const height = useSharedValue(30);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: 'white',
      marginHorizontal: horizontalMargin.value,
      height: height.value,
      overflow: 'hidden',
      alignItems: 'center',
    };
  });

  useEffect(() => {
    horizontalMargin.value = withSequence(withTiming(!sheetOpen ? 30 : 0));
    height.value = withSpring(!sheetOpen ? 30 : 350, {
      stiffness: 20,
      damping: 10,
    });
  }, [sheetOpen]);

  const toggleSheet = () => {
    if (sheetOpen) {
      console.log('first');
    } else {
      setSheetOpen(prev => !prev);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
      <Text>Playground</Text>
      <Pressable onPress={toggleSheet}>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 20,
            alignItems: 'center',
            marginHorizontal: 20,
            elevation: 5,
          }}>
          <Text>main content</Text>
        </View>
      </Pressable>
      <Animated.View style={[animatedStyles]}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Animated.View>
      <View style={{marginTop: 'auto'}}>
        <Button title="close" onPress={() => setSheetOpen(false)} />
      </View>
    </View>
  );
};

export default Playground;
