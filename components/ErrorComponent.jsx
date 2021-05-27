import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MyButton from './MyInputs/MyButton';
import { Color } from '../utils/colors';
import Title from '../widgets/Title';

const ErrorComponent = ({ status, retryHandler }) => {
  return (
    <View style={styles.container}>
      <AntDesign name='warning' size={80} color={Color.red} />
      <Title name={`Status ${status ? status : 500}`} />
      <Text style={styles.text}>
        Something went wrong. Check your connection
      </Text>
      <MyButton title='Try Again' onPress={retryHandler} />
    </View>
  );
};

export default ErrorComponent;

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
