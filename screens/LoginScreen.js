import React from 'react'
import {View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

export default class LoginScreen extends React.Component{

    state ={
        email:"",
        password: "",
        errorMessage: null
    }

    handleLogin= () =>{
        const {email, password}= this.state

        signInWithEmailAndPassword(auth, email, password).catch(error=> this.setState({errorMessage: error.message}))
        .catch(error => this.setState({errorMessage: error.message}));

    }
    render(){
        return( 

            <View style= {styles.container}> 
                <Text style={styles.greeting}>
                    {"Selam\n Hoşgeldin!"}    
                 </Text>
                 <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={styles.form}>
                    <View>
                    <Text style={styles.inputTitle}>E-mail Adresiniz: </Text>
                    <TextInput style={styles.input} 
                    autoCapitalize= "none" 
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}/>

                        </View>
                            <View style= {{marginTop: 32}}>
                            <Text style={styles.inputTitle}>Şifreniz: </Text>
                            <TextInput style={styles.input} secureTextEntry autoCapitalize= "none" 
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                            />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color:"#fff", fontWeight:"500"}}>Giriş Yap</Text>                     
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf: "center", marginTop:32}} onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{color: "#414959", fontSize: 13}}>Uygulamamızda Yeni Misiniz? 
                    <Text style={{fontWeight: "500", color: "#E9446A"}}>  Kayıt Ol</Text>
                    </Text>                     
                </TouchableOpacity>

            </View>

        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },

    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems:"center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    form:{
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },

    button:{
        marginHorizontal: 10,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent:"center"

    },
    error:{
        color:"red",
        fontSize: 13,
        fontWeight:"600",
        textAlign: "center"
    }
})