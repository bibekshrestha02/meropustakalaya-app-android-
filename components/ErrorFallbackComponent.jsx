import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MyButton from './MyInputs/MyButton';
import { Color } from '../utils/colors';
import Title from '../widgets/Title';

const ErrorFallbackComponent = ({ resetError, status }) => {
  return (
    <View style={styles.container}>
      <AntDesign name='warning' size={80} color={Color.red} />
      <Title name={`Status ${status ? status : 500}`} />
      <Text style={styles.text}>Opps! Something went wrong.</Text>
      <MyButton title='Try Again' onPress={resetError} />
    </View>
  );
};

export default ErrorFallbackComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'GentiumBold',
    fontSize: 14,
    letterSpacing: 1,
    marginVertical: 5,
  },
});
