import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app"
import moment from "moment";
import Fire from '../Fire';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

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
            console.log(this.state.posts1);
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
            const Item = ({ text}) => (
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
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 44,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }

})