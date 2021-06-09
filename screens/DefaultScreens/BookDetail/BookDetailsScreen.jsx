import React, {
  useLayoutEffect,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../../components/MyInputs/MyButton';
import ImageContainer from './component/ImageContainer';
import TabNavigationContainer from './navigation/TabNavigationContainer';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import {
  FETCH_ERROR,
  FETCHED,
  FETCHING,
} from '../../../store/constant/fetchReducerConstant';
import { fetchBookDetailsAction } from '../../../store/actions/bookDetailsAction';
import { useDispatch, useSelector } from 'react-redux';
const BookDetailsScreen = ({ route, navigation }) => {
  const [status, setStatus] = useState('idle');
  const { name, id, file } = route.params;
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.client.isVerfied);
  const bookDetails = useSelector((state) => state.bookDetails);
  console.log(bookDetails);
  const subscriptionDetail = useSelector(
    (state) => state.client.subscriptionDetail
  );
  const loadBookDetails = useCallback(async () => {
    try {
      setStatus(FETCHING);
      await dispatch(fetchBookDetailsAction(id));
      setStatus(FETCHED);
    } catch (error) {
      setStatus(FETCH_ERROR);
    }
  }, [setStatus, dispatch, id]);

  useEffect(() => {
    loadBookDetails();
  }, [loadBookDetails]);

  function fileViewerNavigation() {
    if (!isLogin) {
      return navigation.navigate('login', {
        screen: 'loginScreen',
        params: { message: 'Login to get access' },
      });
    }
    const isSubscribe =
      new Date(subscriptionDetail.expires_at).getMilliseconds() < Date.now();
    if (!isSubscribe) {
      return navigation.navigate('membership');
    }
    return navigation.navigate('fileViewer', {
      name: name,
      file: file,
    });
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerRight: () => {
        return <Button title='Read Now' onPress={fileViewerNavigation} />;
      },
      headerRightContainerStyle: styles.headerRightContainerStyle,
      headerTitleStyle: styles.headerTitleStyle,
    });
  }, [navigation]);
  return (
    <FetchApiTemplete status={status} retryHandler={loadBookDetails}>
      <View style={styles.container}>
        <ImageContainer photoUrl={bookDetails.photo} id={bookDetails._id} />
        <TabNavigationContainer data={bookDetails} />
      </View>
    </FetchApiTemplete>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: 'GentiumBold',
    letterSpacing: 1,
    width: '80%',
  },
  headerRightContainerStyle: {
    margin: 10,
  },
});
