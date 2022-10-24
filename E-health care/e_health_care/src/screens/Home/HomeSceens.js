import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Dashboard';
import DocDetails from '../DocDetails';
import SelectTimeSlot from '../SelectTimeSlot';
import Payment from '../PaymentScreen';
import Appointment from '../AppointmentScreens/Appointment';
import Chat from '../ChatScreens/HeadChat';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../core/theme';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const RootHome = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Index" component={Home} />
      <Stack.Screen name="DocDetails" component={DocDetails} />
      <Stack.Screen name="SlotSelection" component={SelectTimeSlot} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};
const RootAppointment = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RootAppointment"
        component={Appointment}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const RootChat = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RootChat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
const RootProfile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RootProfile"
        component={Appointment}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Root = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color = '#10151b', size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Appointment') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles-sharp' : 'chatbubble';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'person-circle-sharp'
              : 'person-circle-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.grey,
      })}>
      <Tabs.Screen
        options={{headerShown: false}}
        name="Home"
        component={RootHome}
      />
      <Tabs.Screen
        options={{headerShown: false}}
        name="Appointment"
        component={RootAppointment}
      />
      <Tabs.Screen
        options={{headerShown: false}}
        name="Chat"
        component={RootChat}
      />
      <Tabs.Screen
        options={{headerShown: false}}
        name="Profile"
        component={RootProfile}
      />
    </Tabs.Navigator>
  );
};

export default Root;
