import React from "react";
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import LogoutScreen from './screens/LogoutScreen'


const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="home" size={24} color={tintColor} />
          }
        },
        Post: {
          screen: PostScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
              <Ionicons
                name="add-circle"
                size={48} color={tintColor}
                color="#4d79ff"
                style={{
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 10,
                  shadowOpacity: 0.3
                }} />
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
        defaultNavigationOptions: {

          tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (navigation.state.key === "Post") {
              navigation.navigate("postModal")
            } else {
              defaultHandler()
            }
          }
        },
        tabBarOptions: {
          activeTintColor: '#161F3D',
          inactiveTintColor: '#B8BBC4',
          showLabel: false,
        }
      }
    ),
    postModal: {
      screen: PostScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none",
  }
)
const DrawerNav = createDrawerNavigator({
  ????k????: {
    screen: LogoutScreen
  },
  AnaSayfa: {
    screen: HomeScreen
  },
  Profil: {
    screen: ProfileScreen
  }
});

const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen }
})

export default createAppContainer(

  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Auth: AuthStack,
      App: AppContainer,
      Logout: DrawerNav
    },
    {
      initialRouteName: "Loading"
    }
  )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});