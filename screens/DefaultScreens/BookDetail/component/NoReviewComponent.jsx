import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Color } from '../../../../utils/colors';
import Title from '../../../../widgets/Title';
const NoReviewComponent = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='rate-review' size={100} color={Color.gray} />
      <Title name='No Review, yet' />
      <Text style={styles.text}>No review in this book yet!</Text>
      <Text style={styles.text}>
        Tap Your Review Button and add your review
      </Text>
    </View>
  );
};

export default NoReviewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Gentium',
    color: Color.lightBlack,
    fontSize: 14,
    letterSpacing: 1,
  },
});
