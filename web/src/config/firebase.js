import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZuwft_T3fo0g4DRzmuEzaN7IgBMIo__U",
    authDomain: "tpec-a008c.firebaseapp.com",
    projectId: "tpec-a008c",
    storageBucket: "tpec-a008c.appspot.com",
    messagingSenderId: "332665456355",
    appId: "1:332665456355:web:47cd80f50c3dde20ae27d6",
    measurementId: "G-MQDZ8WYT1Q"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase