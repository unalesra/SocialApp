import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/firestore';

//require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyAAfhuSU-D274QDAIpC7A8KeiZa9nQbvc8",
    authDomain: "socialapp-ff7da.firebaseapp.com",
    projectId: "socialapp-ff7da",
    storageBucket: "socialapp-ff7da.appspot.com",
    messagingSenderId: "264530972757",
    appId: "1:264530972757:web:f4fe0073af02ecbd0144dc"
};
const app = initializeApp(firebaseConfig);

const dbFirebase = getFirestore();
class Fire {
    constructor() {
        initializeApp(firebaseConfig);
    }

    addPost = async ({ text, localUri }) => {
        //const remoteUri = await this.uploadPhotoAsync(localUri);

        const docRef = await addDoc(collection(dbFirebase, "posts"), {
            text: text,
            uid: this.uid,
            timestamp: this.timestamp,
        });

        // return new Promise((res, rej) => {
        //     this.firestore
        //         .collection("posts")
        //         .add(
        //             {
        //                 text,
        //                 uid: this.uid,
        //                 timestamp: this.timestamp,
        //                 image: remoteUri
        //             })
        //         .then(ref => {
        //             res(ref);
        //         })
        //         .catch(error => {
        //             rej(error);
        //         })
        // })
    }

    uploadPhotoAsync = async uri => {
        // const path = `photos/${this.uid}/${Date.now()}.jpg`;

        // return new Promise(async (res, rej) => {
        //     const response = await fetch(uri);
        //     const file = await response.blob();

        //     let upload = firebase1.storage().ref(path).put(file);

        //     upload.on(
        //         "state_changed",
        //         snapshot => { },
        //         err => {
        //             rej(err);
        //         },
        //         async () => {
        //             const url = await upload.snapshot.ref.getDownloadURL();
        //             res(url);
        //         }
        //     )
        // })
    }

    static readPosts = async () => {
        const querySnapshot = await getDocs(collection(dbFirebase, "posts"));
        // querySnapshot.forEach((doc) => {
        //     var data = new Object();
        //     data.text = doc.data()["text"];
        //     data.timestamp = doc.data()["timestamp"];
        //     var jsonString = JSON.stringify(data);
        //     console.log(doc.id, " => ", jsonString);
        // });

        //burda veriler geliyor tertemiz ama homescreen atamiyom
        console.log(querySnapshot.docs.map(doc => JSON.stringify(doc.data())));
        return querySnapshot.docs.map(doc => doc.data());
    }

    signOut = () => {
        getAuth().signOut();
    };


    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (getAuth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();

export default Fire;