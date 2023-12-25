// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5XuJSGkhRHnYmqOvsvGF4viMLadTsUaQ",
  authDomain: "shopify-ecommerce-90af2.firebaseapp.com",
  projectId: "shopify-ecommerce-90af2",
  storageBucket: "shopify-ecommerce-90af2.appspot.com",
  messagingSenderId: "500497578895",
  appId: "1:500497578895:web:d0a9d40f39d73eda1a29fa",
  measurementId: "G-SBNXHYM49K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
