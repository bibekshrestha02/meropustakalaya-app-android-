import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Axios from '../../utils/Axios';

import MyInputText from '../../components/MyInputs/MyInputText';
import MyButton from '../../components/MyInputs/MyButton';
import LoadingComponent from '../../components/LoadingComponent';
const FindAccountScreen = ({ navigation }) => {
  const initalValue = {
    email: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  const submitHandler = async (value, { setFieldError, setSubmitting }) => {
    setSubmitting(true);
    try {
      const res = await Axios.get(`/auths/resetPassword/email/${value.email}`);
      return navigation.navigate('sendVerificationEmail', {
        email: res.data.data.email,
        url: '/auths/resetPassword/sendOtp',
        isForgetPassword: true,
      });
    } catch (error) {
      if (error.response.status === 400) {
        setFieldError('email', error.response.data.message);
      } else {
        Alert.alert(
          'Something went wrong',
          'There might be internet connection problem. Please check your internet connection and try again'
        );
      }
    }
    setSubmitting(false);
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initalValue}
        validationSchema={validationSchema}
        onSubmit={submitHandler}>
        {({ submitForm, isSubmitting }) => {
          return (
            <>
              <Field
                component={MyInputText}
                name='email'
                placeholder='Enter your Email'
                keyboardType='email-address'
                autoFocus={true}
              />
              <LoadingComponent isVisible={isSubmitting} />
              <MyButton
                title='Find Your Account'
                containerStyle={{
                  height: 40,
                }}
                textStyle={{
                  fontSize: 20,
                }}
                onPress={submitForm}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default FindAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
  },
});
