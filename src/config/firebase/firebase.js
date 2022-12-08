// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB9tP6LYOhu6Zm4ItN-VL5gF6wZeiIHxa0",
  authDomain: "task-management-sib.firebaseapp.com",
  databaseURL: "https://task-management-sib-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "task-management-sib",
  storageBucket: "task-management-sib.appspot.com",
  messagingSenderId: "1057208098438",
  appId: "1:1057208098438:web:aee9c6d4abfe202bcfbb07",
  measurementId: "G-QNVHKGD2W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database, set, ref, onValue };
