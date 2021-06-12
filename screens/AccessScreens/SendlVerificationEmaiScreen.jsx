import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import MyButton from '../../components/MyInputs/MyButton';
import Title from '../../widgets/Title';
import Axios from '../../utils/Axios';
import LoadingComponent from '../../components/LoadingComponent';
const SendEmailVerificationScreen = ({ route, navigation }) => {
  let { email, url, isForgetPassword } = route.params;
  const [isLoading, setLoading] = useState(false);
  const handler = async () => {
    setLoading(true);
    try {
      const res = await Axios.post(url, {
        email: email,
      });
      setLoading(false);
      navigation.navigate('codeConfirmation', {
        email: res.data.email,
        url: isForgetPassword
          ? 'auths/resetPassword/forgetVerifyCode/'
          : 'auths/email/verifyEmail/',
        isForgetPassword: isForgetPassword,
      });
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Something went wrong!',
        `There might be a network problem. Try again.`,
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('login'),
          },
        ]
      );
    }
  };
  return (
    <View style={styles.container}>
      <Title name='Verify your email address' />
      <MyButton
        title='Continue'
        textStyle={styles.textStyle}
        onPress={handler}
      />
      <LoadingComponent isVisible={isLoading} />
    </View>
  );
};

export default SendEmailVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: { fontSize: 18 },
});
