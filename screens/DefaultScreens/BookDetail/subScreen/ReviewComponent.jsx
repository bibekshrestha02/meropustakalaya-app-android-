import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserReviewContainer from '../component/UserReviewContainer';
import AccessDeniedComponent from '../../../../components/AccessDeniedComponent';
import { useSelector } from 'react-redux';
const ReviewComponent = ({ data, setData }) => {
  let isLogin = useSelector((state) => state.client.isVerfied);
  return isLogin ? (
    <UserReviewContainer data={data} setData={setData} />
  ) : (
    <AccessDeniedComponent />
  );
};

export default ReviewComponent;
