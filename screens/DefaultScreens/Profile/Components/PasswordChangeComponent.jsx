import React from 'react';
import { View } from 'react-native';
import ToogleModal from '../Modal/ToogleModal';
import MyInputText from '../../../../components/MyInputs/MyInputText';
import { Field } from 'formik';
import * as Yup from 'yup';
const PasswordChangeComponent = ({
  isVisible,
  submitHandler,
  closeHandler,
}) => {
  const initalValues = {
    password: '',
    newPassword: '',
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(4).max(40).required(),
    newPassword: Yup.string().min(4).max(40).required(),
  });
  return (
    <ToogleModal
      isVisible={isVisible}
      submitHandler={submitHandler}
      title='Change Password'
      closeHandler={closeHandler}
      initalValues={initalValues}
      validationSchema={validationSchema}>
      <View>
        <Field
          component={MyInputText}
          name='password'
          placeholder='Enter Current Password'
          autoFocus={true}
          secureTextEntry={true}
        />
        <Field
          component={MyInputText}
          name='newPassword'
          placeholder='Enter New Password'
          secureTextEntry={true}
        />
      </View>
    </ToogleModal>
  );
};
export default PasswordChangeComponent;
