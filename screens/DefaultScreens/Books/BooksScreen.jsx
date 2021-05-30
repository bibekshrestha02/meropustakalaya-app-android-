import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterComponents from './components/FilterComponents';
import GetFetchScreenTemplete from '../../../templetes/GetFetchScreenTemplete';
import Axios from '../../../utils/Axios';
import BookCardTempelete from '../../../templetes/BookCardTempelete';
import { Alert } from 'react-native';
const BooksScreen = () => {
  const fetchCategory = () => {
    return Axios.get('/categories/');
  };
  const fetchBooks = () => {
    return Axios.get('/books/');
  };

  return (
    <GetFetchScreenTemplete fetchURL={[fetchCategory(), fetchBooks()]}>
      {(data1, data2, _, setData2) => {
        const filterChangeHandler = async (value) => {
          try {
            const res = await Axios.get(`/books?category=${value}`);
            setData2(res.data.data);
          } catch (error) {
            Alert.alert(
              'Something went wrong',
              'Check your internet connection and try again'
            );
          }
        };
        return (
          <View style={styles.container}>
            <FilterComponents
              categoryData={data1}
              filterChangeHandler={filterChangeHandler}
            />
            <BookCardTempelete
              data={data2}
              emptyMessage={'No Book Data found'}
            />
          </View>
        );
      }}
    </GetFetchScreenTemplete>
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
