import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
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
const firebase1 = getFirestore();
class Fire {
    constructor() {
        initializeApp(firebaseConfig);
    }

    addPost = async ({ text, localUri }) => {
        const remoteUri = await this.uploadPhotoAsync(localUri);

        return new Promise((res, rej) => {
            this.firestore
                .collection("posts")
                .add(
                    {
                        text,
                        uid: this.uid,
                        timestamp: this.timestamp,
                        image: remoteUri
                    })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                })
        })
    }

    uploadPhotoAsync = async uri => {
        const path = `photos/${this.uid}/${Date.now()}.jpg`;

        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase1.storage().ref(path).put(file);

            upload.on(
                "state_changed",
                snapshot => { },
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            )
        })
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