import React from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from './src/core/theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens';
import DocDetails from './src/screens/DocDetails';
import HomeScreens from './src/screens/Home/HomeSceens';
const Stack = createNativeStackNavigator();
import {inject, observer} from 'mobx-react';
const Layout = props => {
  const {getToken} = props.store;
  console.log(props);
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        {!getToken() ? (
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="HomeScreens" component={HomeScreens} />
            <Stack.Screen name="DocDetails" component={DocDetails} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default inject('store')(observer(Layout));
