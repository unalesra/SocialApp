import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import HomeScreen from './screens/HomeScreen'
import MessageScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'

import { StyleSheet, Text, View } from 'react-native';

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="home" size={24} color={tintColor} />
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="chatbox" size={24} color={tintColor} />
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Ionicons
            name="add-circle"
            size={48} color={tintColor}
            color="#E9446A"
            style={{
              shadowColor: "#E95446A",
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 10,
              shadowOpacity: 0.3
            }} />
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="notifications" size={24} color={tintColor} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="person" size={24} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#161F3D',
      inactiveTintColor: '#B8BBC4',
      showLabel: false,
    }
  }
)

const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen }
});


export default createAppContainer(

  createSwitchNavigator({
    Loading: LoadingScreen,
    App: AppTabNavigator,
    Auth: AuthStack
  },
    {
      initialRouteName: "Loading"
    }))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});