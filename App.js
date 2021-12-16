
 import {createAppContainer, createSwitchNavigator} from "react-navigation";
 import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase/app';

const AppStack= createStackNavigator({
  Home:{ screen: HomeScreen}
})

const AuthStack= createStackNavigator({
Login: { screen:LoginScreen},
Register: {screen: RegisterScreen}
})


export default createAppContainer(

createSwitchNavigator( {
  Loading: LoadingScreen,
  App: AppStack,
  Auth: AuthStack
},
{
  initialRouteName:"Loading"
}))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});