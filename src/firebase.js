// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPYGWBQ_2qSlskZ5gZIKRoPpSZitRk-cc",
  authDomain: "netflix-react-f92aa.firebaseapp.com",
  projectId: "netflix-react-f92aa",
  storageBucket: "netflix-react-f92aa.appspot.com",
  messagingSenderId: "112319084331",
  appId: "1:112319084331:web:5413f645ca5a5b4989376e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);