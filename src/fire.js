import firebase from "firebase/compat/app";

import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW-blvpdJFOlSmJzopt_Ilbg75UugvUV8",
  authDomain: "platformbish-c971d.firebaseapp.com",
  projectId: "platformbish-c971d",
  storageBucket: "platformbish-c971d.appspot.com",
  messagingSenderId: "948320863713",
  appId: "1:948320863713:web:593b5fd5d7161e6131bea0",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
