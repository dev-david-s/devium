import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC4TY_xHEsGKMpdu504-LeQW6XFnMynZ8s",
    authDomain: "devium-f974f.firebaseapp.com",
    projectId: "devium-f974f",
    storageBucket: "devium-f974f.appspot.com",
    messagingSenderId: "1073034736789",
    appId: "1:1073034736789:web:fbbd0e13cbe9dc488d979c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();