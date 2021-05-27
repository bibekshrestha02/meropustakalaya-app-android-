import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Modal } from 'react-native';
import { Color } from '../utils/colors';
const LoadingComponent = ({ isVisible, message }) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={[styles.container]}>
        <View style={styles.iconContainer}>
          <ActivityIndicator size='large' color={Color.red} />
          <Text style={styles.text}>{message ? message : 'Loading...'}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `rgba(0, 0, 0, 0.2)`,
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
