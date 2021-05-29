import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Color } from '../../../../utils/colors';
const FileLoadingComponent = () => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size='large' color={Color.red} />
      <Text style={styles.text}>File is loading...</Text>
    </View>
  );
};

export default FileLoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  text: {
    fontFamily: 'GentiumBold',
    fontSize: 20,
    color: Color.black,
    letterSpacing: 1,
  },
});
