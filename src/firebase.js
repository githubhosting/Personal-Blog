// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTMjwN2QVsYj2UQSoCJ8Q0rtalbgTqO0Y",
  authDomain: "personal-blog-a6cfc.firebaseapp.com",
  projectId: "personal-blog-a6cfc",
  storageBucket: "personal-blog-a6cfc.appspot.com",
  messagingSenderId: "364364839190",
  appId: "1:364364839190:web:c3c47681957721e8e0b837",
  measurementId: "G-HSVZ4SH5V4"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

export { db };