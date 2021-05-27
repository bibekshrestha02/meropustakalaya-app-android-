import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Color } from '../../../../utils/colors';
const CarouselComponent = ({ name, subDetail, detail }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontFamily: 'GentiumBold', fontSize: 14 }}>{name}</Text>
        <Text
          style={{
            fontFamily: 'GentiumBold',
            fontSize: 16,
            color: Color.red,
            letterSpacing: 0.5,
          }}>
          {subDetail}
        </Text>
        <Text
          style={{
            fontFamily: 'GentiumBold',
            fontSize: 16,
            letterSpacing: 0.5,
            color: Color.lightBlack,
          }}>
          {detail}
        </Text>
      </View>
      <Text style={styles.text}>
        Designed and Programmed with ❤ by Bibek Shrestha
      </Text>
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 6,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    padding: 5,

    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  text: {
    fontSize: 10,
    fontFamily: 'Gentium',
    letterSpacing: 1,
  },
});
