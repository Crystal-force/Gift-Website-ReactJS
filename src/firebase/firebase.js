import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database';
const config = {
  apiKey: "AIzaSyCIqvBI8x0xks9dDY_R-RN9x16Zd38CsK4",
  authDomain: "gift2gift-b508b.firebaseapp.com",
  databaseURL: "https://gift2gift-b508b.firebaseio.com",
  projectId: "gift2gift-b508b",
  storageBucket: "gift2gift-b508b.appspot.com",
  messagingSenderId: "152794237674",
  appId: "1:152794237674:web:657e3df0465dfe5f802593",
  measurementId: "G-K19EKNH4EC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const fireDatabase = firebase.database();
// export default Firebase;