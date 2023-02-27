// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhX0RiWh7o0UdLBJOvP2V1ShtT6Bxj0kE",
  authDomain: "glass-craft.firebaseapp.com",
  projectId: "glass-craft",
  storageBucket: "glass-craft.appspot.com",
  messagingSenderId: "793588000366",
  appId: "1:793588000366:web:8474a163617705e352687f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);