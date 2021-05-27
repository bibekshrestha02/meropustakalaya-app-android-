import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextContainerTempletes = ({ children }) => {
  return <View style={styles.textContainer}>{children}</View>;
};

export default TextContainerTempletes;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
