import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ReviewContainer from '../component/ReviewContainer';
import NoReviewComponent from '../component/NoReviewComponent';
const ReviewListComponent = ({ data }) => {
  return (
    <FlatList
      data={data.reviews}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={() => {
        return <NoReviewComponent />;
      }}
      renderItem={({ item }) => {
        return <ReviewContainer data={item} />;
      }}
    />
  );
};

export default ReviewListComponent;

const styles = StyleSheet.create({});
