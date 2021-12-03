// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF1slZ_J9WgAFyznA_mI0g7YYtDQbzOdg",
  authDomain: "instagram-clone-a4e53.firebaseapp.com",
  projectId: "instagram-clone-a4e53",
  storageBucket: "instagram-clone-a4e53.appspot.com",
  messagingSenderId: "231727863245",
  appId: "1:231727863245:web:0c65215ceb459c2991e084",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage };
