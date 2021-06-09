import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Color } from '../utils/colors';
import SaveBtnComponent from './SaveBtnComponent';
import Rating from './Rating';
import { Url } from '../utils/GlobalVariables';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const BookCard = ({ data }) => {
  const navigation = useNavigation();
  const isLogin = useSelector((state) => state.client.isVerfied);
  const navigateDetail = () => {
    return navigation.navigate('bookDetail', {
      name: data.name,
      id: data._id,
      file: data.file,
    });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={navigateDetail}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `${Url}${data.photo}`,
          }}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.textTitle}>
          {data.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            color: Color.lightBlack,
            fontFamily: 'GentiumBold',
          }}>
          {data.autherName}
        </Text>
        <View style={styles.iconsContainer}>
          <Rating ratingCount={data.rating} isDisabled={true} size={15} />
          {isLogin && <SaveBtnComponent id={data._id} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: 'white',
    width: 175,
    shadowColor: '#000',
    paddingVertical: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    width: 150,
    height: 170,
  },
  image: {
    backgroundColor: '#EDF0F5',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 5,
    alignItems: 'flex-start',
  },
  iconsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontFamily: 'GentiumBold',
    fontSize: 16,
    letterSpacing: 1,
    color: Color.black,
  },
});
