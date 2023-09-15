// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEw-S44OKfOzgIiuU_1txDyNKa5IwfIY",
  authDomain: "alura-challege.firebaseapp.com",
  projectId: "alura-challege",
  storageBucket: "alura-challege.appspot.com",
  messagingSenderId: "408988410680",
  appId: "1:408988410680:web:7ca0fac1a7b344f2edd7cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

