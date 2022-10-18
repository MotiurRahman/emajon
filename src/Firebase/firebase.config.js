// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAnDXT-Erk7BMXJrI-oimOK8a7KKQWjgo",
  authDomain: "fir-db-82e44.firebaseapp.com",
  databaseURL: "https://fir-db-82e44-default-rtdb.firebaseio.com",
  projectId: "fir-db-82e44",
  storageBucket: "fir-db-82e44.appspot.com",
  messagingSenderId: "188836368083",
  appId: "1:188836368083:web:db3e4fde0f1188228d4e26",
  measurementId: "G-1G969FSVJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
