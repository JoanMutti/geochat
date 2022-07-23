/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDALXsLfLlGRRZzlA6mN-TM-UpSLMFgjYA",
  authDomain: "geochat-5e081.firebaseapp.com",
  projectId: "geochat-5e081",
  storageBucket: "geochat-5e081.appspot.com",
  messagingSenderId: "476789701123",
  appId: "1:476789701123:web:8e8e4f2e0db8023d972c36",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   // eslint-disable-next-line no-restricted-globals
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
