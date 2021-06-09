import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
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
    <Pressable style={styles.saveContainer} onPress={saveBookHandler}>
      <Ionicons
        name={isSave ? 'md-bookmark' : 'bookmark-outline'}
        color={Color.red}
        size={size ? size : 20}
      />
    </Pressable>
  );
};

export default SaveBtnComponent;
const styles = StyleSheet.create({
  saveContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
