import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from '../screens/AccessScreens/LoginScreen';
import SignupScreen from '../screens/AccessScreens/SignupScreen';
import { Color } from '../utils/colors';
const AccessTabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.red,
        inactiveTintColor: Color.lightBlack,
        labelStyle: {
          fontFamily: 'GentiumBold',
          fontSize: 18,
        },
        indicatorStyle: {
          backgroundColor: Color.red,
        },
      }}>
      <Tab.Screen
        component={LoginScreen}
        name='loginScreen'
        options={{
          title: 'Login',
        }}
      />
      <Tab.Screen
        component={SignupScreen}
        name='signupScreen'
        options={{
          title: 'Signup',
        }}
      />
    </Tab.Navigator>
  );
};

export default AccessTabNavigation;

const styles = StyleSheet.create({});
