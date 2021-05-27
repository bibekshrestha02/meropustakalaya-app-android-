import React, { useLayoutEffect, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../../components/MyInputs/MyButton';
import Axios from '../../../utils/Axios';
import GetFetchScreenTemplete from '../../../templetes/GetFetchScreenTemplete';
import ImageContainer from './component/ImageContainer';
import TabNavigationContainer from './navigation/TabNavigationContainer';
const BookDetailsScreen = ({ route, navigation }) => {
  const { name, id } = route.params;

  const fetchBook = () => {
    return Axios.get(`/books/${id}`);
  };
  function fileViewerNavigation() {
    return navigation.navigate('fileViewer');
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerRight: () => {
        return <Button title='Read Now' onPress={fileViewerNavigation} />;
      },
      headerRightContainerStyle: {
        margin: 10,
      },
      headerTitleStyle: {
        fontSize: 20,
        fontFamily: 'GentiumBold',
        letterSpacing: 1,
        width: '80%',
      },
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
});
