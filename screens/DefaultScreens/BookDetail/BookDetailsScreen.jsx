import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../../components/MyInputs/MyButton';
import Axios from '../../../utils/Axios';
import GetFetchScreenTemplete from '../../../templetes/GetFetchScreenTemplete';
import ImageContainer from './component/ImageContainer';
import TabNavigationContainer from './navigation/TabNavigationContainer';
import { useSelector } from 'react-redux';
const BookDetailsScreen = ({ route, navigation }) => {
  const { name, id, file } = route.params;
  const isLogin = useSelector((state) => state.client.isVerfied);
  const subscriptionDetail = useSelector(
    (state) => state.client.subscriptionDetail
  );
  const fetchBook = () => {
    return Axios.get(`/books/${id}`);
  };
  function fileViewerNavigation() {
    if (!isLogin) {
      return navigation.navigate('login', {
        screen: 'loginScreen',
        params: { message: 'Login to get access' },
      });
    }
    if (
      new Date(subscriptionDetail.expires_at).getMilliseconds() > Date.now()
    ) {
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
    <GetFetchScreenTemplete fetchURL={[fetchBook()]}>
      {(data, _, setData) => {
        return (
          <View style={styles.container}>
            <ImageContainer photoUrl={data.photo} id={data._id} />
            <TabNavigationContainer data={data} setData={setData} />
          </View>
        );
      }}
    </GetFetchScreenTemplete>
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
