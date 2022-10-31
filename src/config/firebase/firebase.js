// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9tP6LYOhu6Zm4ItN-VL5gF6wZeiIHxa0",
  authDomain: "task-management-sib.firebaseapp.com",
  projectId: "task-management-sib",
  storageBucket: "task-management-sib.appspot.com",
  messagingSenderId: "1057208098438",
  appId: "1:1057208098438:web:aee9c6d4abfe202bcfbb07",
  measurementId: "G-QNVHKGD2W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };