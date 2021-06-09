import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OverViewComponent from '../subScreen/OverViewComponent';
import ReviewComponent from '../subScreen/ReviewComponent';
import ReviewListComponent from '../subScreen/ReviewListComponent';
import { Color } from '../../../../utils/colors';
const TabNavigationContainer = ({ data }) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.red,
        inactiveTintColor: Color.gray,
        labelStyle: {
          fontFamily: 'GentiumBold',
          fontSize: 14,
        },
        indicatorStyle: {
          backgroundColor: Color.red,
        },
      }}>
      <Tab.Screen name='Overview'>
        {() => <OverViewComponent data={data} />}
      </Tab.Screen>
      <Tab.Screen name='Reviews'>
        {() => <ReviewListComponent data={data} />}
      </Tab.Screen>
      <Tab.Screen name='Your Review'>
        {() => <ReviewComponent data={data} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigationContainer;

const styles = StyleSheet.create({});
