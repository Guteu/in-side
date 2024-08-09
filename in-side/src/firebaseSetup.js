// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWSjIlAkp2onaWMPFo1erwH6lOe5MBUWc",
  authDomain: "humanidades-db.firebaseapp.com",
  projectId: "humanidades-db",
  storageBucket: "humanidades-db.appspot.com",
  messagingSenderId: "960668396081",
  appId: "1:960668396081:web:52b895e675470736948310",
  measurementId: "G-RG6SVWQ2NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db
