import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import FilterComponents from './components/FilterComponents';
import Axios from '../../../utils/Axios';
import BookCardTempelete from '../../../templetes/BookCardTempelete';
import useFetchApi from '../../../customHooks/useFetchApiHooks';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import {
  FETCH_ERROR,
  FETCHING,
  FETCHED,
} from '../../../store/constant/fetchReducerConstant';

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

  return (
    <FetchApiTemplete status={status} retryHandler={fetchDataHandler}>
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
    </FetchApiTemplete>
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
