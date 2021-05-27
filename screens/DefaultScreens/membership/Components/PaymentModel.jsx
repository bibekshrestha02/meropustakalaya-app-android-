import React from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import Title from '../../../../widgets/Title';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '../../../../utils/colors';
import MyButton from '../../../../components/MyInputs/MyButton';
import { Dimensions } from 'react-native';
const PaymentModel = ({ isVisible, item, modalHandler, paymentHandler }) => {
  return (
    <Modal transparent={true} visible={isVisible} animationType='fade'>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.titleValueContainer}>
            <Title name='Membership Details' />
            <Pressable onPress={modalHandler}>
              <Ionicons name='md-close' size={30} color={Color.lightBlack} />
            </Pressable>
          </View>
          <View style={styles.titleValueContainer}>
            <Text style={styles.text}>Name</Text>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <View style={styles.titleValueContainer}>
            <Text style={styles.text}>Validation Day</Text>
            <Text style={styles.text}>{`${item.validityDay} days`}</Text>
          </View>
          <View style={styles.titleValueContainer}>
            <Title name='Total' />
            <Title name={`Rs. ${item.price}`} />
          </View>
          <MyButton title='Pay Now' onPress={paymentHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
    borderRadius: 5,
    height: Dimensions.get('screen').height / 4.5,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },

  titleValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Gentium',
    fontSize: 20,
    letterSpacing: 1,
    color: Color.black,
  },
});
