import firebase from "firebase/compat/app";

import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTMFIsES5PNA5_d1VAkJbUbrQCFvMHzi8",
  authDomain: "linetaxi-f7104.firebaseapp.com",
  projectId: "linetaxi-f7104",
  storageBucket: "linetaxi-f7104.appspot.com",
  messagingSenderId: "449467355056",
  appId: "1:449467355056:web:7de959d9c9556f6cdb5075",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
