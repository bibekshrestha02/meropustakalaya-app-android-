import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Color } from '../utils/colors';
import Title from '../widgets/Title';
const TimerModalComponent = ({ isVisible, isSuccess, message }) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Title
            name={isSuccess ? 'Success!' : 'Failed!'}
            textStyle={{ color: isSuccess ? 'green' : Color.red }}
          />
          <Text style={styles.text}>{message && message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default TimerModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 1,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Gentium',
    fontSize: 18,
    color: Color.black,
  },
});
