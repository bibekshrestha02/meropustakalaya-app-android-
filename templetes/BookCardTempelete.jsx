import React from 'react';
import { FlatList } from 'react-native';
import BookCard from '../components/BookCard';
import EmptyBookMessageContainer from './Component/EmptyBookMessageContainer';
const BookCardTempelete = ({ data, emptyMessage, onRefresh, refreshing }) => {
  return (
    <FlatList
      refreshing={refreshing}
      data={data}
      onRefresh={onRefresh}
      renderItem={({ item }) => {
        return <BookCard data={item} />;
      }}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
      }}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={<EmptyBookMessageContainer message={emptyMessage} />}
    />
  );
};

export default BookCardTempelete;
