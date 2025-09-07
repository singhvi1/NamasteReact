// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUxeCfs3NqjMTHcGy2Ch-1BNcas4YFnvU",
  authDomain: "netflix-gpt-5d882.firebaseapp.com",
  projectId: "netflix-gpt-5d882",
  storageBucket: "netflix-gpt-5d882.firebasestorage.app",
  messagingSenderId: "97741207238",
  appId: "1:97741207238:web:accabcf0eada031f2f09c7",
  measurementId: "G-RR306TT724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);