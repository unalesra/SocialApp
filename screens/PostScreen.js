import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Fire from '../Fire';

//const firebase = require('firebase')
//require("firebase/firestore")

export default class PostScreen extends React.Component {
    state = {
        text: "",
        image: null
    }

    componentDidMount() {
    
    }

    handlePost = () => {
        Fire.shared.addPost({ text: this.state.text.trim(), localUri: this.state.image }).then(ref => {
            this.setState({ text: "", image: null });
            this.props.navigation.goBack();
        }).catch(error => {
            alert(error);
        })
    }
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePost}>
                        <Text style={{ fontWeight: "500" }}>Yayınla</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image
                        source={require('../assets/tempAvatar.png')}
                        style={styles.avatar}
                    ></Image>
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{ flex: 1 }}
                        placeholder='Neler paylamak istersin?'
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    ></TextInput>
                </View>
                <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
                    <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }}></Image>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 44,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"

    },
    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    photo: {
        alignItems: 'flex-end',
        marginHorizontal: 32
    }
});