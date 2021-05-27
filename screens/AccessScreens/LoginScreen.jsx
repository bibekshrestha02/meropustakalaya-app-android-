import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Field } from 'formik';
import { Color } from '../../utils/colors';
import FormContainerComponent from './component/AuthFormComponent';
import MyInputText from '../../components/MyInputs/MyInputText';
import * as Yup from 'yup';

const LoginScreen = ({ navigation, route }) => {
  const values = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(4).required(),
  });
  const forgetPasswordNavigationHandler = () => {
    return navigation.navigate('findAccount');
  };
  return (
    <View style={styles.container}>
      <FormContainerComponent
        values={values}
        validationSchema={validationSchema}
        submitRoute='/auths/'>
        <Field
          component={MyInputText}
          name='email'
          placeholder='Enter your Email'
          keyboardType='email-address'
          autoFocus={true}
        />
        <Field
          component={MyInputText}
          name='password'
          secureTextEntry={true}
          placeholder='Enter your Password'
        />
      </FormContainerComponent>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={forgetPasswordNavigationHandler}>
        <Text style={styles.forgText}>Forget your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  forgText: {
    fontSize: 18,
    fontFamily: 'Gentium',
    letterSpacing: 1,
    margin: 10,
    color: Color.lightBlack,
  },
});
