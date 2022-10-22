import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHiXixZriz6mTuIIP7AwMUyqITdWn3J_Y",
    authDomain: "special-projects-35725.firebaseapp.com",
    projectId: "special-projects-35725",
    storageBucket: "special-projects-35725.appspot.com",
    messagingSenderId: "931852807901",
    appId: "1:931852807901:web:dca1a898a258eb65483534",
    measurementId: "G-G5VRZ10WST"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
  };