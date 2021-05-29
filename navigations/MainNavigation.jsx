import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigation from '../navigations/HomeTabNavigation';
import AccessTabNavigation from '../navigations/AccessTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import NavigationHeaderComponent from '../headerComponents/NavigationHeaderComponent';
import BookDetailsScreen from '../screens/DefaultScreens/BookDetail/BookDetailsScreen';
import CodeConfirmationScreen from '../screens/AccessScreens/CodeConfirmationScreen';
import SendlVerificationEmaiScreen from '../screens/AccessScreens/SendlVerificationEmaiScreen';
import FindAccountScreen from '../screens/AccessScreens/FindAccountScreen';
import NewPasswordScreen from '../screens/AccessScreens/NewPasswordScreen';
import MembershipScreen from '../screens/DefaultScreens/membership/MembershipScreen';
import ProfileScreen from '../screens/DefaultScreens/Profile/ProfileScreen';
import FileViewerScreen from '../screens/DefaultScreens/FileViewer/FileViewerScreen';

import { autoLogin } from '../store/actions/ClientAction';
import { useDispatch } from 'react-redux';
import LoadingComponent from '../components/LoadingComponent';
const MainNavigation = () => {
  const Stack = createStackNavigator();
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accessHeaderConfig = {
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: 'GentiumBold',
      fontSize: 20,
      letterSpacing: 1,
    },
  };
  const initialCheck = async () => {
    try {
      setLoading(true);
      await dispatch(autoLogin());
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    initialCheck();
  }, []);
  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{
            headerTitle: () => <NavigationHeaderComponent />,
          }}>
          {() => {
            return <HomeTabNavigation />;
          }}
        </Stack.Screen>
        <Stack.Screen name='bookDetail' component={BookDetailsScreen} />
        <Stack.Screen
          name='login'
          options={{
            headerTitle: '',
            headerStyle: {
              shadowColor: 'transparent',
              elevation: 0,
            },
          }}>
          {() => {
            return <AccessTabNavigation />;
          }}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: 'Verifyin Your Email',
            ...accessHeaderConfig,
          }}
          component={CodeConfirmationScreen}
          name='codeConfirmation'
        />
        <Stack.Screen
          options={{
            title: 'Profile',
            ...accessHeaderConfig,
          }}
          component={ProfileScreen}
          name='profile'
        />
        <Stack.Screen
          options={{
            title: 'Membership',
            ...accessHeaderConfig,
          }}
          component={MembershipScreen}
          name='membership'
        />
        <Stack.Screen
          options={{
            title: 'Verify Email',
            ...accessHeaderConfig,
          }}
          component={SendlVerificationEmaiScreen}
          name='sendVerificationEmail'
        />
        <Stack.Screen
          options={{ title: 'Find Your Account', ...accessHeaderConfig }}
          component={FindAccountScreen}
          name='findAccount'
        />
        <Stack.Screen
          options={{ title: 'Create New Password', ...accessHeaderConfig }}
          component={NewPasswordScreen}
          name='newPassword'
        />
        <Stack.Screen
          options={{ title: 'View Files', ...accessHeaderConfig }}
          component={FileViewerScreen}
          name='fileViewer'
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
