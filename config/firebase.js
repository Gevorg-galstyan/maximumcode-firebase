import firebase from "firebase";
import 'firebase/storage';

export  const app = !firebase.apps.length ? firebase.initializeApp({
    apiKey: "AIzaSyCz0HT_2zAMVT7V901YUNOMI7Afty1cwxg",
    authDomain: "maximumcode-6f36c.firebaseapp.com",
    databaseURL: "https://maximumcode-6f36c-default-rtdb.firebaseio.com",
    projectId: "maximumcode-6f36c",
    storageBucket: "maximumcode-6f36c.appspot.com",
    messagingSenderId: "1047519871820",
    appId: "1:1047519871820:web:e4e004b3281ada00b285e9",
    measurementId: "G-0FKZM8L3GP"
}) : firebase.app();

