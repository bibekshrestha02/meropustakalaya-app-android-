import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileComponent from '../../../../components/ProfileComponent';
import Rating from '../../../../components/Rating';
import { Color } from '../../../../utils/colors';

const ReviewContainer = ({ data }) => {
  return (
    <View style={styles.container}>
      <ProfileComponent name={data.user.name} />
      <View style={styles.reviewContainer}>
        <Text style={styles.title}>{data.user.name}</Text>
        <Rating ratingCount={data.rating} isDisabled={true} />
        <Text style={styles.text}>{data.review}</Text>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
          }}>
          <Text style={styles.text}>
            {new Date(data.createAt).toDateString()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: Color.gray,
    alignItems: 'flex-start',
  },
  reviewContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    color: Color.black,
    letterSpacing: 1,
    fontFamily: 'GentiumBold',
    fontSize: 18,
  },
  text: {
    color: Color.black,
    letterSpacing: 1,
    fontFamily: 'Gentium',
    fontSize: 16,
  },
});
