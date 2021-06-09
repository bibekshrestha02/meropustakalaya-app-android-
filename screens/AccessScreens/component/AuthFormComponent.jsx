import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Axios from '../../../utils/Axios';
import LoadingComponent from '../../../components/LoadingComponent';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import MyButton from '../../../components/MyInputs/MyButton';
import { authAction } from '../../../store/actions/clientAction';
const FormContainerComponent = ({
  children,
  submitRoute,
  values,
  validationSchema,
}) => {
  const dispatch = useDispatch();
  const navigaiton = useNavigation();
  const submitHandler = async (value, { setSubmitting, setFieldError }) => {
    try {
      setSubmitting(true);
      const res = await Axios.post(submitRoute, value);
      if (res.data.email && !res.data.isVerfied) {
        return navigaiton.navigate('codeConfirmation', {
          email: res.data.email,
        });
      }

      await dispatch(authAction(res.data.data, res.data.token));
      return navigaiton.navigate('Home');
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        Alert.alert(
          'Something went wrong',
          'There might be internet connection problem. Please check your internet connection and try again'
        );
      } else {
        const { status } = error.response;
        const { data } = error.response;
        if (status === 400 && data.field) {
          setFieldError(data.field, data.message);
        } else if (status === 400 && data.isVerfied === false) {
          setSubmitting(false);
          return navigaiton.navigate('sendVerificationEmail', {
            email: data.email,
            url: '/auths/email/sendToken',
          });
        } else {
          Alert.alert(
            'Something went wrong try again.',
            'Check your internet connectiona and try again.'
          );
        }
      }
    }
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={values}
      onSubmit={submitHandler}
      validationSchema={validationSchema}>
      {({ handleSubmit, isSubmitting }) => {
        return (
          <View style={styles.formContainer}>
            {children}
            <MyButton
              title='Submit'
              containerStyle={{ height: 45 }}
              textStyle={{ fontSize: 30 }}
              onPress={handleSubmit}
            />
            <LoadingComponent isVisible={isSubmitting} />
          </View>
        );
      }}
    </Formik>
  );
};

export default FormContainerComponent;

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
    justifyContent: 'space-around',
    // height: Dimensions.get('screen').height / 4,
  },
});
