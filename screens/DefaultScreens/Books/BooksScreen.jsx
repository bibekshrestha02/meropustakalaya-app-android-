import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterComponents from './components/FilterComponents';
import GetFetchScreenTemplete from '../../../templetes/GetFetchScreenTemplete';
import Axios from '../../../utils/Axios';
import BookCardTempelete from '../../../templetes/BookCardTempelete';
const BooksScreen = () => {
  const fetchCategory = () => {
    return Axios.get('/categories/');
  };
  const fetchBooks = () => {
    return Axios.get('/books/');
  };
  return (
    <GetFetchScreenTemplete fetchURL={[fetchCategory(), fetchBooks()]}>
      {(res1Data, res2Data) => {
        return (
          <View style={styles.container}>
            <FilterComponents categoryData={res1Data} />
            <BookCardTempelete data={res2Data} />
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
