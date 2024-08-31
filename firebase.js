// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "flashcardsaas-3931b.firebaseapp.com",
  projectId: "flashcardsaas-3931b",
  storageBucket: "flashcardsaas-3931b.appspot.com",
  messagingSenderId: "840268990819",
  appId: "1:840268990819:web:1fe2bacb601066a7d3ab56",
  measurementId: "G-00RCBHSTKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}