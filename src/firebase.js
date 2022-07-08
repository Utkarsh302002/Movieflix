// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvejLyZ3ci5VsnUXtK4CtHHedKRijAgak",
  authDomain: "bmovieflix.firebaseapp.com",
  projectId: "bmovieflix",
  storageBucket: "bmovieflix.appspot.com",
  messagingSenderId: "369266591417",
  appId: "1:369266591417:web:bdc08d29a6856e659dbd68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);