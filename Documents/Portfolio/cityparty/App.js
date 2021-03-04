import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import SplashScreen from './screens/splash/Splash'
import WelcomeScreen from './screens/splash/Welcome'
import LoginScreen from './screens/splash/Login'
import RegisterScreen from './screens/splash/Register'
import CreateProfile from './screens/splash/CreateProfile'
import HomeScreen from './screens/app/Home'
import MessagesScreen from './screens/app/Messages'
import ProfileScreen from './screens/app/Profile'
import { NavIcon } from './common'

import store from './core/store' 

export default function App() {    
  
  const tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <NavIcon name="home" />
          ),
        }} />
        <Tab.Screen name="Messages" component={MessagesScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <NavIcon name="inbox" />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <NavIcon />
          ),
        }} />
      </Tab.Navigator>
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitle: '',
          headerShown: false
        }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="CreateProfile" component={CreateProfile} />
          <Stack.Screen name="Main" children={() => tabs()} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
