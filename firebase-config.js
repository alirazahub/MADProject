// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const { getFirestore, Timestamp, FieldValue } = require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAH9shy9-bCKfHeGsoiDDwx73bb8DIl5k",
  authDomain: "new-app-6cf5b.firebaseapp.com",
  projectId: "new-app-6cf5b",
  storageBucket: "new-app-6cf5b.appspot.com",
  messagingSenderId: "346331695709",
  appId: "1:346331695709:web:0d26d0b2b15ec11c77dbb4",
  measurementId: "G-TZCVVGQ4R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};