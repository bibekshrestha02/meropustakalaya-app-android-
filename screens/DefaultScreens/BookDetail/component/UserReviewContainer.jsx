import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Rating from '../../../../components/Rating';
import MyButton from '../../../../components/MyInputs/MyButton';
import { Color } from '../../../../utils/colors';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import MyInputText from '../../../../components/MyInputs/MyInputText';
import Axios from '../../../../utils/Axios';
import { Alert } from 'react-native';
import LoadingComponent from '../../../../components/LoadingComponent';
import { useDispatch } from 'react-redux';
import {
  addBookReviewAction,
  deleteBookReviewAction,
} from '../../../../store/actions/bookDetailsAction';
const UserReviewContainer = ({ data }) => {
  let isReview = data.userReview;
  const dispatch = useDispatch();
  const reviewSubmitHandler = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      values.book = data._id;
      await dispatch(addBookReviewAction(values));
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong!', 'Something went wrong try again');
    }
    setSubmitting(false);
  };
  const reviewDeleteHandler = async (values, { setSubmitting, setValues }) => {
    async function handler() {
      setSubmitting(true);
      try {
        let id = isReview._id;
        await dispatch(deleteBookReviewAction(id));
        setValues('review', '');
        setValues('rating', 0);
      } catch (error) {
        Alert.alert('Something went wrong!', 'Something went wrong try again');
      }
      setSubmitting(false);
    }
    Alert.alert('Are you sure?', 'You wants to delete your review.', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        style: 'destructive',
        onPress: handler,
      },
    ]);
  };
  const initalValues = {
    rating: isReview ? isReview.rating : 0,
    review: isReview ? isReview.review : '',
  };
  const validationSchema = Yup.object().shape({
    rating: Yup.number().min(1).max(5).required(),
    review: Yup.string().min(2).max(500).required(),
  });
  return (
    <View style={[styles.container, { minHeight: isReview && 150 }]}>
      <Formik
        initialValues={initalValues}
        validationSchema={validationSchema}
        onSubmit={isReview ? reviewDeleteHandler : reviewSubmitHandler}>
        {({ values, setFieldValue, handleSubmit, errors, isSubmitting }) => {
          return (
            <>
              <Text style={styles.Text}>Your Rating</Text>
              <Rating
                ratingHandler={(e) => setFieldValue('rating', e)}
                ratingCount={isReview ? isReview.rating : values.rating}
                error={errors.rating && errors.rating}
              />
              <Text style={styles.Text}>Your Review</Text>
              {isReview ? (
                <Text style={styles.reviewText}>{isReview.review}</Text>
              ) : (
                <Field name='review' component={MyInputText} />
              )}
              <LoadingComponent isVisible={isSubmitting} />
              <MyButton
                title={isReview ? 'Delete' : 'Submit'}
                onPress={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default UserReviewContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    minHeight: 200,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textInput: {
    borderWidth: 1,
    borderColor: Color.gray,
    width: '100%',
  },
  Text: {
    color: Color.lightBlack,
    fontFamily: 'Gentium',
    fontSize: 14,
    letterSpacing: 1,
  },
  reviewText: {
    color: Color.black,
    fontFamily: 'Gentium',
    fontSize: 18,
    letterSpacing: 1,
  },
});
