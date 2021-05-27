import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Color } from '../utils/colors';
const Title = ({ name, onPress, textStyle }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{name}</Text>
    </Pressable>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: Color.black,
    letterSpacing: 1,
    fontSize: 20,
    fontFamily: 'GentiumBold',
  },
});
