import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYVj3_8bMNH3CXBo_CPeYkBxtsLpz7iQA",
  authDomain: "inside-db.firebaseapp.com",
  projectId: "inside-db",
  storageBucket: "inside-db.appspot.com",
  messagingSenderId: "791751810922",
  appId: "1:791751810922:web:dd2e0dcbe9353470c80f13"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db