import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating } from 'react-native-elements';

import { Color } from '../utils/colors';
const RatingComponent = ({
  ratingCount,
  isDisabled,
  size,
  ratingHandler,
  error,
}) => {
  return (
    <View style={styles.container}>
      <Rating
        type='custom'
        imageSize={size ? size : 20}
        readonly={isDisabled}
        startingValue={ratingCount}
        style={styles.rating}
        ratingColor={Color.red}
        ratingBackgroundColor='#EDF0F5'
        onFinishRating={ratingHandler}
      />
      {error && <Text style={styles.errorText}>* {error}</Text>}
    </View>
  );
};

export default RatingComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  errorText: {
    color: Color.red,
    fontSize: 12,
    letterSpacing: 1,
    fontFamily: 'Gentium',
  },
});
