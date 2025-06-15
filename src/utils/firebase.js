// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb_o3NPmlCMjNT1josLQzew3AFe4qDSMM",
  authDomain: "food-ordering-app-cc5dc.firebaseapp.com",
  projectId: "food-ordering-app-cc5dc",
  storageBucket: "food-ordering-app-cc5dc.firebasestorage.app",
  messagingSenderId: "831636938531",
  appId: "1:831636938531:web:7f103dcef7430baf7bf696",
  measurementId: "G-FCVXPV8HD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);