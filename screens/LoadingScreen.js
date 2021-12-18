import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
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


export default class LoadingScreen extends React.Component {
    componentDidMount() {
        onAuthStateChanged(auth, (user) => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Loading... </Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})