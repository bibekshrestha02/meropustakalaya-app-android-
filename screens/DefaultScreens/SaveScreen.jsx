import React from 'react';
import BookCardTempelete from '../../templetes/BookCardTempelete';
import Axios from '../../utils/Axios';
import useFetchApi from '../../customHooks/useFetchApiHooks';
import Loading from '../../components/LoadingComponent';
import {
  FETCH_ERROR,
  FETCHING,
} from '../../store/constant/fetchReducerConstant';
import ErrorComponent from '../../components/ErrorComponent';

const SaveScreen = () => {
  const fetchSave = async () => {
    return Axios.get('/users/saves');
  };
  const {
    state: { data, status },
    fetchDataHandler,
  } = useFetchApi(fetchSave());
  if (status === FETCHING || status === 'idle') {
    return <Loading />;
  }
  if (status === FETCH_ERROR) {
    return <ErrorComponent retryHandler={fetchDataHandler} />;
  }
  return (
    <BookCardTempelete
      data={data[0]}
      refreshing={status === FETCHING}
      onRefresh={fetchDataHandler}
      emptyMessage={'No Books Save yet'}
    />
  );
};

export default SaveScreen;
