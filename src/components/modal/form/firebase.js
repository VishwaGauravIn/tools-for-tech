import { Firestore, getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

/*----------------------------------------------------
                  Firebase Attach
----------------------------------------------------*/
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmULGm2Cs81_5ohf2dQtO1RrkZpTHLhQM",
  authDomain: "tools-for-tech.firebaseapp.com",
  projectId: "tools-for-tech",
  storageBucket: "tools-for-tech.appspot.com",
  messagingSenderId: "1068354455811",
  appId: "1:1068354455811:web:5083ec53c5650a87d10136",
  measurementId: "G-1CEBE2B04C"

});
var db = firebaseApp.firestore();
// var db = firebaseApp.firestore();

export { db };
/*----------------------------------------------------
                  Firebase Attach
----------------------------------------------------*/