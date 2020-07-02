import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2KZ4xvOaD832olsC1BG_IWhrmEibRSEA",
    authDomain: "practicafirebasesql.firebaseapp.com",
    databaseURL: "https://practicafirebasesql.firebaseio.com",
    projectId: "practicafirebasesql",
    storageBucket: "practicafirebasesql.appspot.com",
    messagingSenderId: "801828093731",
    appId: "1:801828093731:web:e231bd9d13c011f2ba5696",
    measurementId: "G-R09X8H1L6S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


console.log('Firebase Configurado');

export default firebase.firestore();