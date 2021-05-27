import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Color } from '../../utils/colors';
const Button = ({ title, onPress, isOutLine, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isOutLine ? 'white' : Color.red,
        borderWidth: isOutLine && 1,
        borderColor: isOutLine && Color.red,
        ...containerStyle,
        ...styles.container,
      }}
      onPress={onPress}
      activeOpacity={0.9}>
      <Text
        style={{
          color: isOutLine ? Color.red : 'white',
          ...textStyle,
          ...styles.text,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    letterSpacing: 0.5,
    fontFamily: 'GentiumBold',
  },
});
