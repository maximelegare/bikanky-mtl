import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
// import "firebase/analytics";

// eslint-disable-next-line no-undef
const API_KEY = 'AIzaSyCKVM5ISrbhalvgUbA2rNKqoKD8R33JgKM';

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

// get access to auth and firestore across the app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// ///////////////////////////

// get the current user obj and unsubscribe
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// ///////////////////////////

// create a firestore profile if there is no snapshot that exist.
export const createUserProfileDocument = async (userAuth) => {
  // console.log(additionnalData)
  if (!userAuth) {
    return;
  }

  // userRef is a reference to the db collection/doc
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  // With snapshot, I can check if there is actually some data in that reference
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createAt = new Date();

    // set data at the userRef
    try {
      await userRef.set({
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// ///////////////////////////

// create an object with firebase data
export const transformArrayToObject = (collSnapshot) => {
  // create new array
  const transformedCollections = collSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      items,
      title,
      id: doc.id,
    };
  });
  // transform the array in an object
  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const addShippingAddress = async (userId, address, user) => {
  const userRef = firestore.doc(`/users/${userId}`);
  const { email, createAt } = user;

  try {
    userRef.set({ email, createAt, address });
  } catch (err) {
    console.log("error creating user address", err);
  }
};

// ///////////////////////////

// google signIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;

// ///////////////////////////

// batch multiple objects at the same time in firebase
// use it in useEffect
export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // create new collectionRef with the name passed as argument (collectionKey)
  const collectionRef = firestore.collection(collectionKey);

  // get access to batch function
  const batch = firestore.batch();

  // loop through the objects (at first, it's an object => Object.values())
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // await for batch to finish
  await batch.commit();
};