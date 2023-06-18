// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDls2OnJNN3CEhWq2peQ_G6xpKG3bIjoLY",
  authDomain: "react-autho-nm1.firebaseapp.com",
  projectId: "react-autho-nm1",
  storageBucket: "react-autho-nm1.appspot.com",
  messagingSenderId: "558882502933",
  appId: "1:558882502933:web:19774495df6c3c99bc111c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };