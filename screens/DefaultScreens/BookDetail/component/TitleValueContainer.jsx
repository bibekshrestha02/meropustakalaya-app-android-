import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../../../../utils/colors';
const TitleValueContainer = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.title}>
        {name} :{' '}
      </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default TitleValueContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '70%',
  },
  title: {
    fontFamily: 'GentiumBold',
    fontSize: 18,
    color: Color.lightBlack,
    letterSpacing: 1,
  },
  value: {
    fontFamily: 'Gentium',
    fontSize: 18,
    color: Color.lightBlack,
    letterSpacing: 1,
  },
});
