import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Color } from '../../../../utils/colors';
import HeaderContainerTempletes from '../templetes/HeaderContainerTempletes';
import Title from '../../../../widgets/Title';
import MyButton from '../../../../components/MyInputs/MyButton';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import LoadingComponent from '../../../../components/LoadingComponent';
const ToogleModal = ({
  isVisible,
  title,
  closeHandler,
  submitHandler,
  children,
  validationSchema,
  initalValues,
}) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <Formik
        initialValues={initalValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}>
        {({ handleSubmit, isSubmitting }) => {
          return (
            <View style={styles.container}>
              <View style={styles.card}>
                <HeaderContainerTempletes>
                  <Title name={title ? title : ''} />
                  <Ionicons
                    name='md-close'
                    size={20}
                    color={Color.lightBlack}
                    onPress={closeHandler}
                  />
                </HeaderContainerTempletes>
                {children}
                <MyButton onPress={handleSubmit} title={'Save Changes'} />
                <LoadingComponent isVisible={isSubmitting} message='Loading' />
              </View>
            </View>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ToogleModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 1,
    borderRadius: 5,
    width: '90%',
    minHeight: 220,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Gentium',
    fontSize: 18,
    color: Color.black,
  },
});
