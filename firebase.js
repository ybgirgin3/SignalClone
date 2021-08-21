import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCieMEJOsPhb_CfNVdv5Uf80u4MdvX-8i4",
  authDomain: "fun-signal-clone.firebaseapp.com",
  projectId: "fun-signal-clone",
  storageBucket: "fun-signal-clone.appspot.com",
  messagingSenderId: "950034723499",
  appId: "1:950034723499:web:42b8be2eab5cd57de9fdee",
  measurementId: "G-8E90SNXWPR"
};

let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };