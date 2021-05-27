import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Logo from '../widgets/Logo';
import MyButton from '../components/MyInputs/MyButton';
import { useNavigation } from '@react-navigation/native';
import ProfileComponent from '../components/ProfileComponent';
import Title from '../widgets/Title';
import { useSelector } from 'react-redux';
import { getDay } from '../utils/HelperFn';
const UnAuthHeaderComponent = () => {
  const isVerfied = useSelector((state) => state.client.isVerfied);
  const subscriptionDetail = useSelector(
    (state) => state.client.subscriptionDetail
  );
  const isSubscribed =
    subscriptionDetail && getDay(Date.now(), subscriptionDetail.expires_at) > 0;
  const navigation = useNavigation();
  const loginHandler = () => {
    return navigation.navigate('login');
  };
  const membershipHandler = () => {
    return navigation.navigate('membership');
  };
  const profileNavigateHandler = () => {
    return navigation.navigate('profile');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
        }}>
        <Logo />
      </View>
      <View style={styles.sideHeaderContainer}>
        {isSubscribed ? (
          <Title
            name={`${getDay(
              Date.now(),
              subscriptionDetail.expires_at
            )} days left`}
            textStyle={{ fontSize: 16 }}
          />
        ) : (
          <MyButton
            title='Subscribe'
            isOutLine={true}
            onPress={membershipHandler}
          />
        )}

        {isVerfied ? (
          <ProfileComponent name='Bibek' onPress={profileNavigateHandler} />
        ) : (
          <MyButton title='Login' onPress={loginHandler} />
        )}
      </View>
    </View>
  );
};

export default UnAuthHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 6,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sideHeaderContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
});
