// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt3VvWlNjAJRKtEqjzje9lcLfGRKPFnzQ",
  authDomain: "blog-project-d0ed6.firebaseapp.com",
  projectId: "blog-project-d0ed6",
  storageBucket: "blog-project-d0ed6.appspot.com",
  messagingSenderId: "99127126294",
  appId: "1:99127126294:web:2ac3dfc9cfc7ea34664837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// connections with firebase 
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
