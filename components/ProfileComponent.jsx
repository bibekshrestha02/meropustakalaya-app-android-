import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Color } from '../utils/colors';
import { useSelector } from 'react-redux';
const ProfileComponent = ({ name, onPress, isLrg }) => {
  const clientName = useSelector((state) => state.client.name);
  return (
    <Pressable
      style={[styles.container, isLrg && styles.lrgContainer]}
      onPress={onPress}>
      <Text style={[styles.text, isLrg && styles.lrgText]}>
        {name ? name.charAt(0) : clientName.charAt(0)}
      </Text>
    </Pressable>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  lrgContainer: {
    width: 60,
    height: 60,
  },
  container: {
    backgroundColor: Color.red,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontFamily: 'GentiumBold',
    fontSize: 25,
  },
  lrgText: {
    fontSize: 30,
  },
});
