import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderContainerTempletes = ({ children }) => {
  return <View style={styles.headerContainer}>{children}</View>;
};

export default HeaderContainerTempletes;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
