// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAAcz-6AqxWuWpp_4MM2LQuzRKyw3udrG4",
  authDomain: "firestrorepract.firebaseapp.com",
  projectId: "firestrorepract",
  storageBucket: "firestrorepract.appspot.com",
  messagingSenderId: "1010219823056",
  appId: "1:1010219823056:web:a06817908de9e7818213d5",
  measurementId: "G-7GQ1QE7E66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
