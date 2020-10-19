// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyADwBdzYsJrMPYQu52mC6gcrBcQ2rFDWY8",
  authDomain: "store-1fe3d.firebaseapp.com",
  databaseURL: "https://store-1fe3d.firebaseio.com",
  projectId: "store-1fe3d",
  storageBucket: "store-1fe3d.appspot.com",
  messagingSenderId: "440911682799",
  appId: "1:440911682799:web:0874622775ed1862870f1a",
  measurementId: "G-P701K830SK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};