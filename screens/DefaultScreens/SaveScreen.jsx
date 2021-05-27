import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetFetchScreenTemplete from '../../templetes/GetFetchScreenTemplete';
import Axios from '../../utils/Axios';
import BookCardTempelete from '../../templetes/BookCardTempelete';
const SaveScreen = () => {
  const fetchSave = async () => {
    return Axios.get('/users/saves');
  };

  return (
    <GetFetchScreenTemplete fetchURL={[fetchSave()]}>
      {(data) => {
        return (
          <BookCardTempelete data={data} emptyMessage={'No Books Save yet'} />
        );
      }}
    </GetFetchScreenTemplete>
  );
};

export default SaveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
