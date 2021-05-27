import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '../../../../utils/colors';
const CardComponent = ({ item, isSelected, selectCardHandler }) => {
  return (
    <Pressable
      onPress={() => selectCardHandler(item)}
      style={[
        styles.container,
        { borderColor: isSelected ? Color.red : Color.gray },
      ]}>
      <Ionicons
        name={isSelected ? 'md-radio-button-on' : 'md-radio-button-off'}
        color={isSelected ? Color.red : Color.lightBlack}
        size={20}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={[styles.text]}>Rs. {item.price}</Text>
      </View>
    </Pressable>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderWidth: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  subContainer: {
    flex: 10,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Gentium',
    fontSize: 16,
    color: Color.black,
  },
  title: {
    fontFamily: 'GentiumBold',
    fontSize: 20,
    color: Color.black,
  },
});
