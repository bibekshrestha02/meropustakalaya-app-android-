import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../widgets/Title';
const EmptyBookMessageContainer = ({ message }) => {
  return (
    <View style={styles.container}>
      <Title name={message ? message : 'No Data Found'} />
    </View>
  );
};

export default EmptyBookMessageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Dimensions.get('screen').height / 1.5,
  },
});
