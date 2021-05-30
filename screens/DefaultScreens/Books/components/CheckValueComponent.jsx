import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '../../../../utils/colors';

const CheckValueComponent = ({ title, value, onChange, isSelected }) => {
  return (
    <Pressable style={styles.container} onPress={() => onChange(value)}>
      <Ionicons
        name={isSelected ? 'ios-checkbox' : 'md-square-outline'}
        color={Color.black}
        size={18}
      />
      <Text style={styles.Text}> {title}</Text>
    </Pressable>
  );
};

export default CheckValueComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text: {
    fontSize: 18,
    fontFamily: 'Gentium',
    letterSpacing: 1,
  },
});
