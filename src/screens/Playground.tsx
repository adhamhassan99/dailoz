/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button, Pressable, ScrollView} from 'react-native';
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
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
      position: 'absolute',
      top: 55,
      left: 0,
      right: 0,
      zIndex: 100,
    };
  });

  useEffect(() => {
    horizontalMargin.value = withSequence(withTiming(!sheetOpen ? 30 : 0));
    height.value = withSpring(!sheetOpen ? 30 : 355, {
      stiffness: 200,
      damping: 150,
    });
  }, [height, horizontalMargin, sheetOpen]);

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
      <ScrollView
        scrollEnabled={!sheetOpen}
        onScroll={() => setSheetOpen(false)}
        style={{backgroundColor: 'red'}}>
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
          <Pressable onPress={() => setSheetOpen(false)}>
            <View
              style={{
                height: 5,
                width: 40,
                backgroundColor: 'lightgrey',
                borderRadius: 10,
              }}
            />
          </Pressable>
        </Animated.View>
        <Pressable onPress={() => setSheetOpen(false)}>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Playground;
