import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJtrgqI8F_6BlSEv_Wy_MbxwgyO53nI-0",
  authDomain: "proyecto-scesi.firebaseapp.com",
  projectId: "proyecto-scesi",
  storageBucket: "proyecto-scesi.firebasestorage.app",
  messagingSenderId: "770145053261",
  appId: "1:770145053261:web:63028f65ad6865ae284a04",
  measurementId: "G-46VN1DKKT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}