import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../widgets/Title';
import OTPTextInput from 'react-native-otp-textinput';
import { Color } from '../../utils/colors';
import Button from '../../components/MyInputs/MyButton';
import Axios from '../../utils/Axios';
import LoadingComponent from '../../components/LoadingComponent';
import { Alert } from 'react-native';
const CodeConfirmationScreen = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const { email, url, isForgetPassword } = route.params;
  const [OTP, setOTP] = useState('');
  const [otpError, setOtpError] = useState(null);
  const loginHandler = () => {
    return navigation.navigate('Home');
  };
  const resendHandler = async () => {
    setLoading(true);
    setOTP('');
    setOtpError(null);

    try {
      await Axios.post('/auths/email/sendToken', { email });
      setLoading(false);
      Alert.alert('Success!', 'OTP code send to your email.');
    } catch (error) {
      console.log(error.response);
      Alert.alert('Something went wrong!', 'Try Again!');
    }
    setLoading(false);
  };
  const submitHandler = async () => {
    try {
      if (!OTP) {
        setOtpError('OTP is required');
        return;
      }
      setLoading(true);
      setOtpError(null);

      const res = await Axios.get(`${url}${email}/${OTP}`);
      if (isForgetPassword) {
        return navigation.navigate('newPassword', {
          otp: OTP,
          email: email,
        });
      }
      if (res.data.status === 'verfied') {
        Alert.alert(
          'Verified!',
          'You are successfully verified. Login to your account.',
          [
            {
              text: 'Ok',
              onPress: loginHandler,
            },
          ]
        );
      }
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        Alert.alert(
          'Something went wrong',
          'There might be internet connection problem. Please check your internet connection and try again'
        );
      }
      if (error.response.data.type === 'otp') {
        setOtpError(error.response.data.message);
      }
      if (
        error.response.data.type === 'email' &&
        error.response.data.message === 'You are already Verified'
      ) {
        Alert.alert(
          'Verified!',
          'You are already verified. Login to your account.',
          [
            {
              text: 'Ok',
              onPress: loginHandler,
            },
          ]
        );
      }
    }
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>We have sent OTP code to your email </Text>
      <Title name={email} />
      <Text style={styles.text}>Enter four digit code</Text>
      <OTPTextInput
        defaultValue={OTP}
        handleTextChange={(e) => setOTP(e)}
        tintColor={otpError ? Color.red : Color.black}
        offTintColor={otpError ? Color.red : Color.lightBlack}
        textInputStyle={{
          fontFamily: 'Gentium',
          color: otpError ? Color.red : Color.black,
        }}
      />
      {otpError && (
        <Text style={[styles.text, { color: Color.red }]}>*{otpError}</Text>
      )}
      <LoadingComponent isVisible={isLoading} />
      <Title name={'Resend OTP?'} onPress={resendHandler} />
      <Button
        title='Submit'
        textStyle={{ fontSize: 20 }}
        onPress={submitHandler}
      />
    </View>
  );
};

export default CodeConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    fontFamily: 'GentiumBold',
    fontSize: 18,
    textAlign: 'center',
    color: Color.lightBlack,
    letterSpacing: 1,
    paddingHorizontal: 5,
  },
});
