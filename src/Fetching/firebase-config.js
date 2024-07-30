// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVgIXALpjEZNw28Uo3z-7piNtkLSM5wUw",

  authDomain: "financialsmotorsmotos.firebaseapp.com",

  projectId: "financialsmotorsmotos",

  storageBucket: "financialsmotorsmotos.appspot.com",

  messagingSenderId: "787125135785",

  appId: "1:787125135785:web:9e09ec7edde0ba2fc7bcb8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);