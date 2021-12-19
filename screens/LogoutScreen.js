import React from 'react'
import { View, Text, StyleSheet, Image, LayoutAnimation,Button } from 'react-native'
import { createDrawerNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAAfhuSU-D274QDAIpC7A8KeiZa9nQbvc8",
    authDomain: "socialapp-ff7da.firebaseapp.com",
    projectId: "socialapp-ff7da",
    storageBucket: "socialapp-ff7da.appspot.com",
    messagingSenderId: "264530972757",
    appId: "1:264530972757:web:f4fe0073af02ecbd0144dc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export default class LogoutScreen extends React.Component {
    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/authHeader.png')}
                    style={{ marginTop: -180, marginLeft: -70 }}>
                </Image>

                <Button
                    onPress={() => {
                        Fire.shared.signOut();
                    }}
                    title="Çıkış Yap"
                />

            </View>
        )}   

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

const AppNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen
      }
    });
  
  const AppContainer = createAppContainer(AppNavigator);
