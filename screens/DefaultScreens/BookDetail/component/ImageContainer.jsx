import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Url } from '../../../../utils/GlobalVariables';
import SaveBtnComponent from '../../../../components/SaveBtnComponent';
import { useSelector } from 'react-redux';
const ImageContainer = ({ photoUrl, id }) => {
  const isLogin = useSelector((state) => state.client.isVerfied);
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: `${Url}${photoUrl}` }}
        resizeMode='contain'
      />
      {isLogin && (
        <View style={styles.saveBtnContainer}>
          <SaveBtnComponent size={30} id={id} />
        </View>
      )}
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 300,
    padding: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  saveBtnContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    elevation: 10,
    top: 250,
    right: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
