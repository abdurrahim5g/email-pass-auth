// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6kstoBRTfMQylSmCbkycPSKTW0FpG2ZY",
  authDomain: "email-pass-auth-782ac.firebaseapp.com",
  projectId: "email-pass-auth-782ac",
  storageBucket: "email-pass-auth-782ac.appspot.com",
  messagingSenderId: "338632596456",
  appId: "1:338632596456:web:2b27f28623bec48302625d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;