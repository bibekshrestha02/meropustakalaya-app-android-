import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '../utils/colors';
import { useSelector, useDispatch } from 'react-redux';
import { saveBookAction } from '../store/actions/clientAction';
const SaveBtnComponent = ({ size, id }) => {
  const dispatch = useDispatch();
  const saveBook = useSelector((state) => state.client.saveBook);
  let isSave = saveBook.includes(id.toString());
  const saveBookHandler = async () => {
    try {
      await dispatch(saveBookAction(id));
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <View>
      <Ionicons
        onPress={saveBookHandler}
        name={isSave ? 'md-bookmark' : 'bookmark-outline'}
        color={Color.red}
        size={size ? size : 15}
      />
    </View>
  );
};

export default SaveBtnComponent;
