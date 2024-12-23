// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM8s6gbNimG8b2z856ta9nlNcqtqxY51Y",
  authDomain: "orbit-196a7.firebaseapp.com",
  projectId: "orbit-196a7",
  storageBucket: "orbit-196a7.firebasestorage.app",
  messagingSenderId: "600298528544",
  appId: "1:600298528544:web:aefecfea6b0c52f21e0145",
  measurementId: "G-D71ESP3MDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;