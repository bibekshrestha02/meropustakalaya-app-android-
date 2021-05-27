import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../utils/colors';
const Logo = () => {
  return (
    <View>
      <Text style={styles.logo}>Mero Pustakalaya</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    color: Color.red,
    fontFamily: 'GentiumBold',
    fontSize: 22,
  },
});
