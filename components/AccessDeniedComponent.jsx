import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Color } from '../utils/colors';
import Title from '../widgets/Title';
const AccessDeniedComponent = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='play-disabled' size={100} color={Color.gray} />
      <Title name='You are not login' />
      <Text style={styles.text}>Login to add your review</Text>
    </View>
  );
};

export default AccessDeniedComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Gentium',
    color: Color.lightBlack,
    fontSize: 14,
    letterSpacing: 1,
  },
});
