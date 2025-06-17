// src/utils/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// ✅ FIRST initialize app
const firebaseConfig = {
  apiKey: "AIzaSyCb_o3NPmlCMjNT1josLQzew3AFe4qDSMM",
  authDomain: "food-ordering-app-cc5dc.firebaseapp.com",
  projectId: "food-ordering-app-cc5dc",
  storageBucket: "food-ordering-app-cc5dc.firebasestorage.app",
  messagingSenderId: "831636938531",
  appId: "1:831636938531:web:7f103dcef7430baf7bf696",
  measurementId: "G-FCVXPV8HD6"
};

const app = initializeApp(firebaseConfig); // ✅ initialize app here
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ now this is safe

export { app, auth }; // export both app and auth
