import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzpRBD0IJ29ooI67iC62rorXfQkL-LMOA",
  authDomain: "firecommerce-bf683.firebaseapp.com",
  projectId: "firecommerce-bf683",
  storageBucket: "firecommerce-bf683.appspot.com",
  messagingSenderId: "757461671012",
  appId: "1:757461671012:web:6e1ee35562e01ec9a8d371",
  measurementId: "G-9751SCTRZD"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB;