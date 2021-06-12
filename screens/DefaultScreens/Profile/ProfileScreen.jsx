import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  logoutAction,
  editNameAction,
  changePasswordAction,
} from '../../../store/actions/clientAction';
import GeneralDetailComponent from './Components/GeneralDetailComponent';
import MembershipDetailComponent from './Components/MembershipDetailComponent';
import PasswordChangeComponent from './Components/PasswordChangeComponent';
import EditNameComponent from './Components/EditNameComponent';
const ProfileScreen = ({ navigation }) => {
  const [isEditNameModalToogle, setEditNameModalToogle] = useState(false);
  const [isChangePasswordModalToogle, setChangePasswordModalToogle] =
    useState(false);
  const dispatch = useDispatch();
  const logOutHandler = async () => {
    Alert.alert('Are you sure?', 'You want to logout your account.', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        style: 'destructive',
        onPress: async () => {
          try {
            await dispatch(logoutAction());
            return navigation.navigate('Home');
          } catch (error) {
            Alert.alert('Something went wrong try again.');
          }
        },
      },
    ]);
  };

  const editNameModalHandler = () => {
    setEditNameModalToogle((e) => !e);
  };
  const editNameSubmitHandler = async (value, { setSubmitting }) => {
    setSubmitting(true);
    try {
      await dispatch(editNameAction(value));
      setSubmitting(false);
      editNameModalHandler();
    } catch (error) {
      setSubmitting(false);
      Alert('Something Went wrong!', 'Something went wrong try again');
      editNameModalHandler();
    }
  };

  const changePasswordModalHandler = () => {
    setChangePasswordModalToogle((e) => !e);
  };
  const changePasswordSubmitHandler = async (
    value,
    { setSubmitting, setFieldError }
  ) => {
    setSubmitting(true);
    try {
      await changePasswordAction(value);
      Alert.alert('Success!', 'Password changed successfully😊');
      setSubmitting(false);
      changePasswordModalHandler();
    } catch (error) {
      setSubmitting(false);
      if (error.code === 'ECONNABORTED') {
        Alert.alert(
          'Something went wrong',
          'There might be internet connection problem. Please check your internet connection and try again'
        );
      } else {
        const { status, data } = error.response;
        if (status === 400) {
          setFieldError(data.name, data.message);
        }
      }
    }
  };
  const data = useSelector((state) => state.client);
  return (
    <View style={styles.container}>
      <GeneralDetailComponent
        data={data}
        logoutHandler={logOutHandler}
        toogleEditNameModalHandler={editNameModalHandler}
        toogleChangePasswordModalHandler={changePasswordModalHandler}
      />
      <EditNameComponent
        data={data}
        isVisible={isEditNameModalToogle}
        closeHandler={editNameModalHandler}
        submitHandler={editNameSubmitHandler}
      />
      <PasswordChangeComponent
        isVisible={isChangePasswordModalToogle}
        closeHandler={changePasswordModalHandler}
        submitHandler={changePasswordSubmitHandler}
      />
      <MembershipDetailComponent
        data={data.subscriptionDetail ? data.subscriptionDetail : {}}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
