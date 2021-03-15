import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import RegistrationScreen from '../components/RegistrationScreen';
import AppStack from './AppStack';

const Stack = createStackNavigator();
export default AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="signup"
        component={RegistrationScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="App"
        component={AppStack}
      />
    </Stack.Navigator>
  );
};
