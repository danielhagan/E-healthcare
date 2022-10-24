import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import PastAppointment from './PastAppointment';
import ActiveAppointment from './ActiveAppointment';
import CancelledApp from './CancelledApp';
import {theme} from '../../core/theme';

const Toptabs = createMaterialTopTabNavigator();

const Appointment = () => {
  return (
    <Toptabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.grey,
        tabBarPressColor: theme.colors.primary,
      }}>
      <Toptabs.Screen name="Active" component={ActiveAppointment} />
      <Toptabs.Screen name="Past" component={PastAppointment} />
      <Toptabs.Screen name="Cancelled" component={CancelledApp} />
    </Toptabs.Navigator>
  );
};

export default Appointment;
