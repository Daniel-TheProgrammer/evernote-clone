import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyDWqpq_dG3_5q2ohpMhJ-vpFMHx2hPG_bw",
    authDomain: "fir-login-11fea.firebaseapp.com",
    databaseURL: "https://fir-login-11fea.firebaseio.com",
    projectId: "fir-login-11fea",
    storageBucket: "fir-login-11fea.appspot.com",
    messagingSenderId: "878555906100",
    appId: "1:878555906100:web:1b064f504b8117d18d0a61",
    measurementId: "G-F3YZYXRYLH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
