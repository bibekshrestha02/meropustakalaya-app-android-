import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserReviewContainer from '../component/UserReviewContainer';
import AccessDeniedComponent from '../../../../components/AccessDeniedComponent';
import { useSelector } from 'react-redux';
const ReviewComponent = ({ data }) => {
  let isLogin = useSelector((state) => state.client.isVerfied);
  return isLogin ? (
    <UserReviewContainer data={data} />
  ) : (
    <AccessDeniedComponent />
  );
};

export default ReviewComponent;
