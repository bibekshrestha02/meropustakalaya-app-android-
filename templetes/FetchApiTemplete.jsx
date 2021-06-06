import React from 'react';
import { FETCHING, FETCH_ERROR } from '../store/constant/fetchReducerConstant';
import ErrorComponent from '../components/ErrorComponent';
import Loading from '../components/LoadingComponent';
const FetchApiTemplete = ({ status, children, retryHandler }) => {
  if (status === FETCHING || status === 'idle') {
    return <Loading />;
  } else if (status === FETCH_ERROR) {
    return <ErrorComponent retryHandler={retryHandler} />;
  }
  return children;
};

export default FetchApiTemplete;
