// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // ✅ only once
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX-u_JjY6SjSCrRxIFzIzDaB6jK8ABZIo",
  authDomain: "locate-me-app-a3aa6.firebaseapp.com",
  projectId: "locate-me-app-a3aa6",
  storageBucket: "locate-me-app-a3aa6.firebasestorage.app",
  messagingSenderId: "724194171349",
  appId: "1:724194171349:web:82dad80f649136371e055c",
  measurementId: "G-3L65TJGVYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);