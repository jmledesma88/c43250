// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzcjfeykju79vnaYoWjiZx2MFStVy5trQ",
  authDomain: "profinal-rjs-juan-ledesma.firebaseapp.com",
  projectId: "profinal-rjs-juan-ledesma",
  storageBucket: "profinal-rjs-juan-ledesma.appspot.com",
  messagingSenderId: "120794684976",
  appId: "1:120794684976:web:7e6eada7906522ac8957f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);