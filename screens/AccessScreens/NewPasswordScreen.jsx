import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Axios from '../../utils/Axios';
import MyInputText from '../../components/MyInputs/MyInputText';
import MyButton from '../../components/MyInputs/MyButton';
import LoadingComponent from '../../components/LoadingComponent';
const NewPasswordScreen = ({ navigation, route }) => {
  const { email, otp } = route.params;
  const initalValue = {
    newPassword: '',
  };
  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().min(4).max(50).required(),
  });
  const submitHandler = async (value, { setSubmitting }) => {
    setSubmitting(true);
    try {
      await Axios.put(`/auths/resetPassword/reset`, {
        email,
        newPassword: value.newPassword,
        otp,
      });
      setSubmitting(false);
      Alert.alert(
        'Success!',
        'Password Successfully Change. Login to your account',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Home'),
          },
        ]
      );
    } catch (error) {
      setSubmitting(false);
      Alert.alert(
        'Something went wrong',
        'There might be internet connection problem. Please check your internet connection and try again'
      );
    }
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
                name='newPassword'
                placeholder='Enter your newPassword'
                autoFocus={true}
                secureTextEntry={true}
              />
              <LoadingComponent isVisible={isSubmitting} />
              <MyButton
                title='Create'
                containerStyle={styles.containerStyle}
                textStyle={styles.textStyle}
                onPress={submitForm}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  textStyle: {
    fontSize: 20,
  },
  containerStyle: {
    height: 40,
  },
});
