import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../utils/colors';
import HomeScreen from '../screens/DefaultScreens/Home/HomeScreen';
import BooksScreen from '../screens/DefaultScreens/Books/BooksScreen';
import SaveScreen from '../screens/DefaultScreens/SaveScreen';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
const HomeTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const isLogin = useSelector((state) => state.client.isVerfied);
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      route.name === 'Home'
        ? (iconName = 'home')
        : route.name == 'Book'
        ? (iconName = 'book')
        : (iconName = 'save');
      return <AntDesign name={iconName} color={color} size={size} />;
    },
  });
  const tabBarOptions = {
    activeTintColor: Color.red,
    inactiveTintColor: Color.gray,
    labelStyle: {
      fontFamily: 'GentiumBold',
      fontSize: 18,
    },
    style: {
      height: 60,
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Books' component={BooksScreen} />
      {isLogin && <Tab.Screen name='Save' component={SaveScreen} />}
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;

const styles = StyleSheet.create({});
