// var firebaseConfig = {
//     apiKey: "AIzaSyB1W_1FthfrEv54C-9-e3TYmMZmWhzxZu8",
//     authDomain: "crudfire-6d869.firebaseapp.com",
//     databaseURL: "https://crudfire-6d869-default-rtdb.firebaseio.com",
//     projectId: "crudfire-6d869",
//     storageBucket: "crudfire-6d869.appspot.com",
//     messagingSenderId: "458160182738",
//     appId: "1:458160182738:web:1f47c26b76744e05aa240b",
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);












  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9X57KuqBqBDfBLZ9xuwI_w5R6NR8rCGI",
  authDomain: "crud-firebase-20.firebaseapp.com",
  databaseURL: "https://crud-firebase-20-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-20",
  storageBucket: "crud-firebase-20.appspot.com",
  messagingSenderId: "884453897040",
  appId: "1:884453897040:web:accbdbf6a53ce5a13db255",
  measurementId: "G-JMPGDSBJ0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);