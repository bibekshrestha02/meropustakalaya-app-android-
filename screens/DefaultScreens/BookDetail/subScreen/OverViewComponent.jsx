import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import TitleValueContainer from '../component/TitleValueContainer';
import Rating from '../../../../components/Rating';
import Title from '../../../../widgets/Title';
import { Color } from '../../../../utils/colors';
const OverViewComponent = ({ data }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <TitleValueContainer name='Name' value={data.name} />
        <TitleValueContainer name='Auther Name' value={data.autherName} />
        <TitleValueContainer name='Total Page' value={data.pages} />
        <TitleValueContainer name='Category' value={data.category} />
        <TitleValueContainer
          name='Released at'
          value={new Date(data.releasedAt).toDateString()}
        />
        <Rating ratingCount={data.rating} size={20} isDisabled={true} />
        <Title name='Description' />
        <Text style={styles.descriptionText}>{data.description}</Text>
      </View>
    </ScrollView>
  );
};

export default OverViewComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  descriptionText: {
    color: Color.lightBlack,
    fontFamily: 'Gentium',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'justify',
  },
});
