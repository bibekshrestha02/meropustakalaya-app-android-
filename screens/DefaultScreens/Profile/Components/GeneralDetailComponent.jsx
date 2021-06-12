import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import ProfileComponent from '../../../../components/ProfileComponent';
import MyButton from '../../../../components/MyInputs/MyButton';
import Title from '../../../../widgets/Title';
import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Color } from '../../../../utils/colors';
import MainContainerTempletes from '../templetes/MainContainerTempletes';
import HeaderContainerTempletes from '../templetes/HeaderContainerTempletes';
import TextContainerTempletes from '../templetes/TextContainerTempletes';
import { getYearMonths } from '../../../../utils/HelperFn';

const GeneralDetailComponent = ({
  data,
  logoutHandler,
  toogleEditNameModalHandler,
  toogleChangePasswordModalHandler,
}) => {
  return (
    <MainContainerTempletes>
      <HeaderContainerTempletes>
        <ProfileComponent isLrg={true} />
        <MyButton isOutLine={true} title='Logout' onPress={logoutHandler} />
      </HeaderContainerTempletes>
      <TextContainerTempletes>
        <Title name={data.name + ' '} textStyle={{ fontSize: 28 }} />
        <AntDesign
          name='edit'
          size={20}
          color={Color.lightBlack}
          onPress={toogleEditNameModalHandler}
        />
      </TextContainerTempletes>
      <TextContainerTempletes>
        <Text style={styles.text}>{data.email} </Text>
        <MaterialIcons name='verified-user' size={20} color='#1FAA59' />
      </TextContainerTempletes>
      <TextContainerTempletes>
        <FontAwesome5 name='birthday-cake' size={14} color={Color.lightBlack} />
        <Text style={styles.text}> Joined on{getYearMonths(data.join_at)}</Text>
      </TextContainerTempletes>
      <Pressable onPress={toogleChangePasswordModalHandler}>
        <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
          Change Password
        </Text>
      </Pressable>
    </MainContainerTempletes>
  );
};

export default GeneralDetailComponent;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Gentium',
    fontSize: 20,
    color: Color.lightBlack,
    letterSpacing: 1,
  },
});
