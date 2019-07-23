import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAw-8RJQKlRWFZf1w7d4H1BfkAyXjRuMho',
  authDomain: 'crwn-clothing-c62ca.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-c62ca.firebaseio.com',
  projectId: 'crwn-clothing-c62ca',
  storageBucket: '',
  messagingSenderId: '509909563427',
  appId: '1:509909563427:web:feb304d049153c66'
};

// handle user authentication data to store its profile into firestore
export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData
      });
    } catch (error) {
      console.log('error creating new user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
