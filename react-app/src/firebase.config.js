// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByS387lnX1mx-xQxhGWrCSfq_O4IxYTvc",
  authDomain: "simpleproject-407bc.firebaseapp.com",
  projectId: "simpleproject-407bc",
  storageBucket: "simpleproject-407bc.appspot.com",
  messagingSenderId: "267479321598",
  appId: "1:267479321598:web:4238d0d35c756e8f82ceaf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
