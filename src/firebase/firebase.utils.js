import firebase from "firebase";

import "firebase/auth";
// import "firebase/firestore";
// import "firebase/analytics";

// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;



const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "bikanky-montreal.firebaseapp.com",
  projectId: "bikanky-montreal",
  storageBucket: "bikanky-montreal.appspot.com",
  messagingSenderId: "104322449559",
  appId: "1:104322449559:web:7786aec48bcc3931cea9d2",
  measurementId: "G-SV834GCNQY",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore()




const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithRedirect(provider)

export default firebase




export const getCurrentUser = () => {
    
}




