import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '../../../../utils/colors';

const CheckValueComponent = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={value ? 'ios-checkbox' : 'md-square-outline'}
        color={Color.black}
        size={18}
      />
      <Text style={styles.Text}> {name}</Text>
    </View>
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
