import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainContainerTempletes = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default MainContainerTempletes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 300,
    justifyContent: 'space-around',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
