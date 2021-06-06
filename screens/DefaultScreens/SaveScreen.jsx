import React from 'react';
import BookCardTempelete from '../../templetes/BookCardTempelete';
import Axios from '../../utils/Axios';
import useFetchApi from '../../customHooks/useFetchApiHooks';
import { FETCHING } from '../../store/constant/fetchReducerConstant';
import FetchApiTemplete from '../../templetes/FetchApiTemplete';

const SaveScreen = () => {
  const fetchSave = () => {
    return Axios.get('/users/saves');
  };
  const {
    state: { data, status },
    fetchDataHandler,
  } = useFetchApi(fetchSave());

  return (
    <FetchApiTemplete status={status} retryHandler={fetchDataHandler}>
      <BookCardTempelete
        data={data[0]}
        refreshing={status === FETCHING}
        onRefresh={fetchDataHandler}
        emptyMessage={'No Books Save yet'}
      />
    </FetchApiTemplete>
  );
};

export default SaveScreen;
