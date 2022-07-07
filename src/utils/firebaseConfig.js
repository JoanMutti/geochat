// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDALXsLfLlGRRZzlA6mN-TM-UpSLMFgjYA",
  authDomain: "geochat-5e081.firebaseapp.com",
  projectId: "geochat-5e081",
  storageBucket: "geochat-5e081.appspot.com",
  messagingSenderId: "476789701123",
  appId: "1:476789701123:web:8e8e4f2e0db8023d972c36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
