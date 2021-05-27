import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '../utils/colors';
import { useSelector, useDispatch } from 'react-redux';
import { bookMarkAction } from '../store/actions/ClientAction';
const BookMark = ({ size, id }) => {
  const dispatch = useDispatch();
  const saveBook = useSelector((state) => state.client.saveBook);
  let isBookMark = saveBook.includes(id.toString());
  const bookmarkHandler = async () => {
    try {
      await dispatch(bookMarkAction(id));
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <View>
      <Ionicons
        onPress={bookmarkHandler}
        name={isBookMark ? 'md-bookmark' : 'bookmark-outline'}
        color={Color.red}
        size={size ? size : 15}
      />
    </View>
  );
};

export default BookMark;

const styles = StyleSheet.create({});
