import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { getAuth } from "firebase/auth";
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

export default class HomeScreen extends React.Component{
    state={
        email:"",
        dispaleyname:""
    }

    componentDidMount(){
        const {email, displayname} = auth.currentUser;

        this.setState({email, displayname});
    }

    signoutUser=()=>{
        signOut(auth);
    }
    render(){
        return( 
            <View style= {styles.container}> 
                <Text>Hi {this.state.email}! </Text>

                <TouchableOpacity style={{ marginTop: 32}} onPress={this.signoutUser}>
                    <Text>Çıkış Yap</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})