import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../../../../components/MyInputs/MyButton';
import Title from '../../../../widgets/Title';
import MainContainerTempletes from '../templetes/MainContainerTempletes';
import HeaderContainerTempletes from '../templetes/HeaderContainerTempletes';
import TextContainerTempletes from '../templetes/TextContainerTempletes';
import { getDay, getYearMonths } from '../../../../utils/HelperFn';
import { Color } from '../../../../utils/colors';
import { useNavigation } from '@react-navigation/native';
const MembershipDetailComponent = ({ data }) => {
  const navigation = useNavigation();
  const renewHandler = () => {
    return navigation.navigate('membership');
  };
  return (
    <MainContainerTempletes>
      <HeaderContainerTempletes>
        <Title name='Membership Details' textStyle={{ fontSize: 22 }} />
        <MyButton title='Review' isOutLine={true} onPress={renewHandler} />
      </HeaderContainerTempletes>
      <TextContainerTempletes>
        <Text style={styles.text}>
          Start At :{getYearMonths(data.start_at)}
        </Text>
      </TextContainerTempletes>
      <TextContainerTempletes>
        <Text style={styles.text}>
          Expires At :{getYearMonths(data.expires_at)}
        </Text>
      </TextContainerTempletes>
      <TextContainerTempletes>
        <Text style={styles.text}>
          Updated At : {getYearMonths(data.update_at)}
        </Text>
      </TextContainerTempletes>
      <TextContainerTempletes>
        <Text style={styles.text}>
          Remaining Days :
          {data.expires_at
            ? `${getDay(Date.now(), data.expires_at)} days`
            : '-'}
        </Text>
      </TextContainerTempletes>
    </MainContainerTempletes>
  );
};

export default MembershipDetailComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'Gentium',
    letterSpacing: 1,
    color: Color.black,
  },
});
