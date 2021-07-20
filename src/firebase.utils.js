import firebase from "firebase";
import "firebase/firestore";

// eslint-disable-next-line no-undef
const fbApiKey = process.env.REACT_APP_FIREBASE_API_KEY;

const config = {
  apiKey: fbApiKey,
  authDomain: "bikanky-mtl.firebaseapp.com",
  projectId: "bikanky-mtl",
  storageBucket: "bikanky-mtl.appspot.com",
  messagingSenderId: "444938041747",
  appId: "1:444938041747:web:6906e7d5fd0342669ed066",
  measurementId: "G-SZT6ETEPVE",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const auth = firebase.auth()
