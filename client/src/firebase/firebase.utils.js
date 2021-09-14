import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import { generateUID } from "../_string-utilites/string-utilites";

// import "firebase/analytics";

// eslint-disable-next-line no-undef
const API_KEY = "AIzaSyCKVM5ISrbhalvgUbA2rNKqoKD8R33JgKM";

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

// get access to auth, firestore and storage
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

var storage = firebase.storage();

// Create a storage reference from our storage service
// eslint-disable-next-line no-unused-vars

// ///////////////////////////ks

//////////////////////////////////////
//        CREATE STORAGE PATH       //
//////////////////////////////////////

export const createNewStorageImagePath = async ({ file, itemId, type }) => {
  var filePath = `images/${itemId}/${file.name}`;
  console.log(type);
  if (type === "imageUrl") {
    filePath = `images/${itemId}/main-${file.name}`;
  }
  const fullPathNewImageRef = storage.ref(filePath);
  return fullPathNewImageRef
    .put(file)
    .then((snapShot) => {
      return fullPathNewImageRef
        .getDownloadURL()
        .then((url) => {
          return url;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

//////////////////////////////////////
//       DELETE STORAGE IMAGE       //
//////////////////////////////////////


export const deleteStorageImagePath = async ({ fileName, itemId, type }) => {
  console.log("firebase", fileName, itemId, type)
  var imagePath = `images/${itemId}/${fileName}`;
  console.log(type);
  if (type === "imageUrl") {
    imagePath = `images/${itemId}/main-${fileName}`;
  }
  const fullPathNewImageRef = storage.ref(imagePath);

  console.log("fullpath", fullPathNewImageRef)
  fullPathNewImageRef.delete().then(() => {
    console.log("file deleted")
  }).catch((err) => {
    console.log(err);
  });
};

// ///////////////////////////

//////////////////////////////////////
//   CREATE FIRESTORE NEW CATEGORY  //
//////////////////////////////////////

export const createNewItemCategory = async (item) => {
  const id = generateUID();
  const categoryRef = firestore.doc(`/categories/${id}`);

  const categorySnapshot = categoryRef.get();

  if (!categorySnapshot.exists) {
    try {
      await categoryRef.set({
        title: item.title,
        items: {},
        id,
      });
    } catch (err) {
      console.log(err.message);
    }
  } else {
    console.log("category alreary exists");
  }
};

//////////////////////////////////////
//     CREATE FIRESTORE NEW ITEM    //
//////////////////////////////////////

export const createNewItem = async (item) => {
  console.log("create item");
  const {
    bulletPoints,
    carouselImages,
    cartQuantity,
    collection,
    collectionId,
    id,
    imageUrl,
    linkUrl,
    price,
    routeName,
    shortDescription,
    stock,
    title,
  } = item;
  const itemRef = firestore.doc(`categories/${collectionId}`);

  const itemSnapshot = itemRef.get();

  if (!itemSnapshot.exists) {
    try {
      await itemRef.set(
        {
          items: {
            [id]: {
              bulletPoints,
              carouselImages,
              cartQuantity,
              collection,
              collectionId,
              id,
              imageUrl,
              linkUrl,
              price,
              routeName,
              shortDescription,
              stock,
              title,
            },
          },
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err.message);
    }
  } else {
    console.log("item already exists");
  }
};

//////////////////////////////////////
//     DELETE FIRESTORE CATEGORY    //
//////////////////////////////////////

export const deleteFirestoreCategory = async (value) => {
  const categoryRef = firestore.doc(`/categories/${value}`);

  const categorySnapshot = categoryRef.get();

  if (!categorySnapshot.exists) {
    try {
      await categoryRef.delete();
    } catch (err) {
      console.log(err.message);
    }
  } else {
    console.log("category alreary exists");
  }
};

//////////////////////////////////////
//       DELETE FIRESTORE ITEM      //
//////////////////////////////////////

export const deleteFirestoreItem = async (collection, routeName) => {
  const itemRef = firestore.doc(`categories/${collection}`);

  const itemSnapshot = itemRef.get();
  console.log(itemSnapshot);
  if (!itemSnapshot.exists) {
    try {
      await itemRef.update({
        [`items.${routeName}`]: firebase.firestore.FieldValue.delete(),
      });
    } catch (err) {
      console.log(err.message);
    }
  } else {
    console.log("item already exists");
  }
};

//////////////////////////////////////
//       UPDATE FIRESTORE ITEM      //
//////////////////////////////////////

export const updateFirestoreItem = async (item) => {
  console.log("update item");
  const {
    bulletPoints,
    carouselImages,
    cartQuantity,
    collection,
    collectionId,
    id,
    imageUrl,
    linkUrl,
    price,
    routeName,
    shortDescription,
    stock,
    title,
  } = item;
  const itemRef = firestore.doc(`categories/${collectionId}`);

  const itemSnapshot = itemRef.get();
  if (!itemSnapshot.exists) {
    try {
      await itemRef.update({
        [`items.${id}`]: {
          bulletPoints,
          carouselImages,
          cartQuantity,
          collection,
          collectionId,
          id,
          imageUrl,
          linkUrl,
          price,
          routeName,
          shortDescription,
          stock,
          title,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  } else {
    console.log("item already exists");
  }
};

//////////////////////////////////////
// CREATE OBJECT WITH FIREBASE DATA //
//////////////////////////////////////

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

// USER RELATED CODE
/////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
//        GET CURRENT USER          //
//////////////////////////////////////

// get the current user obj and unsubscribe
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

//////////////////////////////////////
//CREATE FIRESTORE PROFILE FOR USER //
//////////////////////////////////////

// create a firestore profile if there is no snapshot that exist.
export const createUserProfileDocument = async (userAuth) => {
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

//////////////////////////////////////
//         GOOGLE SIGN-IN           //
//////////////////////////////////////

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;

//////////////////////////////////////
//      ADD SHIPPING ADDRESS        //
//////////////////////////////////////

export const addShippingAddress = async (userId, address, user) => {
  const userRef = firestore.doc(`/users/${userId}`);
  const { email, createAt } = user;

  try {
    userRef.set({ email, createAt, address });
  } catch (err) {
    console.log("error creating user address", err);
  }
};

// UNUSED CODE FOR REFERENCE
/////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
//      BATCH DATA IN FIREBASE      //
//////////////////////////////////////

// use it in useEffect
// export const addCollectionsAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   // create new collectionRef with the name passed as argument (collectionKey)
//   const collectionRef = firestore.collection(collectionKey);

//   // get access to batch function
//   const batch = firestore.batch();

//   // loop through the objects (at first, it's an object => Object.values())
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   // await for batch to finish
//   await batch.commit();
// };
