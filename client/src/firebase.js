// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ashish-estate.firebaseapp.com",
  projectId: "ashish-estate",
  storageBucket: "ashish-estate.appspot.com",
  messagingSenderId: "561654874216",
  appId: "1:561654874216:web:0e4e18a9fd9ac3007cfbdd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);