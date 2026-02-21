import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4wt_xN_35j6v_5u234Uh4UyM7QS-VrkE",
  authDomain: "fir-crud-app-3f2db.firebaseapp.com",
  projectId: "fir-crud-app-3f2db",
  storageBucket: "fir-crud-app-3f2db.firebasestorage.app",
  messagingSenderId: "685673939369",
  appId: "1:685673939369:web:4276903c4b58b84cf2c4b8",
  measurementId: "G-Q8M2G3CCGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// IMPORTANT EXPORTS
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);