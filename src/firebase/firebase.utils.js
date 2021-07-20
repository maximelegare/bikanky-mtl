import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
// import "firebase/analytics";

// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

// firebase config
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "bikanky-montreal.firebaseapp.com",
  projectId: "bikanky-montreal",
  storageBucket: "bikanky-montreal.appspot.com",
  messagingSenderId: "104322449559",
  appId: "1:104322449559:web:7786aec48bcc3931cea9d2",
  measurementId: "G-SV834GCNQY",
};
// initialize the firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


// get the current user obj and unsubscribe
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth){
    return
  }
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const { displayName, email } = userAuth
    const createAt = new Date()


    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        additionalData: additionalData? additionalData : null
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef

}

// google signIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
