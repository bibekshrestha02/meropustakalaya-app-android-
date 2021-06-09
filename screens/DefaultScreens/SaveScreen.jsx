import React, { useCallback, useState, useEffect } from 'react';
import BookCardTempelete from '../../templetes/BookCardTempelete';
import {
  FETCHING,
  FETCH_ERROR,
  FETCHED,
} from '../../store/constant/fetchReducerConstant';
import FetchApiTemplete from '../../templetes/FetchApiTemplete';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSaveBooksAction } from '../../store/actions/saveBooksActions';

const SaveScreen = ({ navigation }) => {
  const [status, setStatus] = useState('idle');
  const dispatch = useDispatch();
  const saveBooks = useSelector((state) => state.saveBooks);
  const loadBooks = useCallback(async () => {
    try {
      setStatus(FETCHING);
      await dispatch(fetchSaveBooksAction());
      setStatus(FETCHED);
    } catch (error) {
      setStatus(FETCH_ERROR);
    }
  }, [dispatch, setStatus]);

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', loadBooks);
    return unSubscribe;
  }, [loadBooks]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks, dispatch]);

  return (
    <FetchApiTemplete status={status} retryHandler={loadBooks}>
      <BookCardTempelete
        data={saveBooks}
        refreshing={status === FETCHING}
        onRefresh={loadBooks}
        emptyMessage={'No Books Save yet'}
      />
    </FetchApiTemplete>
  );
};

export default SaveScreen;
