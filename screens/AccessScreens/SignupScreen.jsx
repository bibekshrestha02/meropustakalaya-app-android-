import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Field } from 'formik';
import MyInputText from '../../components/MyInputs/MyInputText';
import * as Yup from 'yup';
import FormContainerComponent from './component/AuthFormComponent';
const SignupScreen = ({ navigation }) => {
  const value = {
    name: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(50).required('Name is required'),
    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(4, 'Password must be at least 4 characters.')
      .max(400)
      .required('Password is required'),
  });
  return (
    <View style={styles.container}>
      <FormContainerComponent
        submitRoute='/auths/signUp'
        values={value}
        validationSchema={validationSchema}>
        <Field
          component={MyInputText}
          name='name'
          placeholder='Enter your full name'
        />
        <Field
          component={MyInputText}
          name='email'
          placeholder='Enter your Email'
        />
        <Field
          component={MyInputText}
          name='password'
          secureTextEntry={true}
          placeholder='Enter your Password'
        />
      </FormContainerComponent>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  formContainer: {
    padding: 10,
    justifyContent: 'space-around',
  },
});
