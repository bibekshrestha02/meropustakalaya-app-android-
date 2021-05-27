import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToogleModal from '../Modal/ToogleModal';
import { Field } from 'formik';
import MyInputText from '../../../../components/MyInputs/MyInputText';
import * as Yup from 'yup';

const EditNameComponent = ({
  isVisible,
  submitHandler,
  closeHandler,
  data,
}) => {
  const initalValues = {
    name: data ? data.name : '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(40).required(),
  });
  return (
    <ToogleModal
      isVisible={isVisible}
      submitHandler={submitHandler}
      title='Edit Name'
      closeHandler={closeHandler}
      initalValues={initalValues}
      validationSchema={validationSchema}>
      <View>
        <Field
          component={MyInputText}
          name='name'
          placeholder='Name'
          autoFocus={true}
          label='Name'
        />
      </View>
    </ToogleModal>
  );
};

export default EditNameComponent;

const styles = StyleSheet.create({});
