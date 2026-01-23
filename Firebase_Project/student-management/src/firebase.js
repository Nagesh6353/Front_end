import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "PASTE_FROM_FIREBASE",
  authDomain: "PASTE",
  projectId: "student-management-1a9a0", // same project
  storageBucket: "PASTE",
  messagingSenderId: "PASTE",
  appId: "PASTE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
