import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Color } from '../../../../utils/colors';
import Title from '../../../../widgets/Title';
import CheckValueComponent from './CheckValueComponent';
const FilterComponents = ({ categoryData }) => {
  const [isToogle, setToogle] = useState(false);
  const toogleHandler = () => {
    setToogle((e) => !e);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.headerContainer}
        onPress={toogleHandler}>
        <Text style={styles.text}>Filter Result</Text>
        <FontAwesome
          name={isToogle ? 'close' : 'sliders'}
          size={24}
          color={Color.lightBlack}
        />
      </TouchableOpacity>

      {isToogle && (
        <View style={styles.sliderContainer}>
          <Title name='Categories' />
          {categoryData &&
            categoryData.map((category) => {
              return (
                <CheckValueComponent key={category._id} name={category.title} />
              );
            })}

          <Title name='Sort By' />
          <CheckValueComponent name='Rating' value={true} />
          <CheckValueComponent name='New Arrivals' value={false} />
          <CheckValueComponent name='Name' value={false} />
        </View>
      )}
    </View>
  );
};

export default FilterComponents;

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'GentiumBold',
    fontSize: 20,
    letterSpacing: 1,
    color: Color.lightBlack,
  },
  sliderContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 50,
    width: '100%',
    elevation: 5,
    padding: 10,
  },
});
