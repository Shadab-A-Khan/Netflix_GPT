// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEvOtQxB8CBiDx95SktLhlbeYpMTCea9o",
  authDomain: "netflixgpt-f1701.firebaseapp.com",
  projectId: "netflixgpt-f1701",
  storageBucket: "netflixgpt-f1701.appspot.com",
  messagingSenderId: "362814768343",
  appId: "1:362814768343:web:8b4815dfea4832b8161c92",
  measurementId: "G-P5DWX5PZRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();