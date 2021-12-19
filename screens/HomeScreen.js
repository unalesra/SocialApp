import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app"
<<<<<<< Updated upstream
=======
import moment from "moment";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream

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

                <TouchableOpacity style={{ marginTop: 32}} onPress={this.props.navigation.navigate("Login")}>
                    <Text>Çıkış Yap</Text>
                </TouchableOpacity>
            </View>
        )
=======

const dbFirebase = getFirestore();
export default class HomeScreen extends React.Component {
    state={
        posts1:""
    }
    
    static readPosts = async () => {
        const querySnapshot = await getDocs(collection(dbFirebase, "posts"));   
        return querySnapshot.docs.map(doc => doc.data());     
    }


    async componentDidMount() {  
        const querySnapshot = await getDocs(collection(dbFirebase, "posts"));
        var x=querySnapshot.docs.map(doc => doc.data());
        this.setState({posts1: x});
    }
    renderPost = post => {
        return (

            <View style={styles.feedItem}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post}</Text>
                        </View>

                        <Ionicons name="reorder-three" size={24} color="#73788B" />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="heart-circle" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="chatbox" size={24} color="#73788B" />
                    </View>
                </View>
            </View>
        );
    };
    
    render() {
        const Item = ({ text}, {timestamp}) => (
             <View style={styles.feedItem}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={styles.name}>{text}</Text>
             
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Ionicons name="heart-circle" size={24} color="#73788B" style={{ marginRight: 16 }} />
                    <Ionicons name="chatbox" size={24} color="#73788B" />
                </View>
            </View>
        </View>
          );
        const renderItem = ({ item }) => (
            <Item text={item.text} />
          );
        return (
      
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Akış</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={this.state.posts1}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
>>>>>>> Stashed changes
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
<<<<<<< Updated upstream
=======
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 44,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
>>>>>>> Stashed changes
        justifyContent: "center",
        alignItems: "center"
    }

})