import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import FilterComponents from './components/FilterComponents';
import GetFetchScreenTemplete from '../../../templetes/GetFetchScreenTemplete';
import Axios from '../../../utils/Axios';
import BookCardTempelete from '../../../templetes/BookCardTempelete';
import useFetchApi from '../../../customHooks/useFetchApiHooks';
import Loading from '../../../components/LoadingComponent';
import {
  FETCH_ERROR,
  FETCHING,
  FETCHED,
} from '../../../store/constant/fetchReducerConstant';
import ErrorComponent from '../../../components/ErrorComponent';
const BooksScreen = () => {
  const fetchCategory = () => {
    return Axios.get('/categories/');
  };
  const fetchBooks = () => {
    return Axios.get('/books/');
  };
  const {
    state: { data, status, error },
    dispatchAction,
    fetchDataHandler,
  } = useFetchApi(fetchCategory(), fetchBooks());
  const filterChangeHandler = async (value) => {
    try {
      const res = await Axios.get(`/books?category=${value}`);
      dispatchAction({
        type: FETCHED,
        payload: {
          data: [data[0], res.data.data],
        },
      });
    } catch (error) {
      dispatchAction({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };

  if (status === FETCHING || status === 'idle') {
    return <Loading />;
  }
  if (status === FETCH_ERROR) {
    console.log(error);
    return <ErrorComponent retryHandler={fetchDataHandler} />;
  }

  return (
    <View style={styles.container}>
      <FilterComponents
        categoryData={data[0]}
        filterChangeHandler={filterChangeHandler}
      />
      <BookCardTempelete
        data={data[1]}
        refreshing={status === FETCHING}
        onRefresh={fetchDataHandler}
        emptyMessage={'No Book Data found'}
      />
    </View>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    position: 'relative',
  },
});
