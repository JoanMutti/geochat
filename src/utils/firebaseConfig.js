// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
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

const messaging = getMessaging(app);

export const getTokener = (setTokenFound) => {
  return getToken(messaging, { vapidKey: "BCY1q12BXQiyQE7uNJqauZHWEMPNWtwVMmMu9E-XWlL61QgpjXd0k9ExFSJzpN4h2I5wmemOh5Mvq2ZjvyUMPZ4" })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(currentToken);
        alert("current token for client: " + currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log("No registration token available. Request permission to generate one.");
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
