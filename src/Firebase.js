
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNkJl6hvpVah6vGsdSxQTX5LEvUflx2sk",
  authDomain: "zouflix-react-app.firebaseapp.com",
  projectId: "zouflix-react-app",
  storageBucket: "zouflix-react-app.appspot.com",
  messagingSenderId: "1054878625156",
  appId: "1:1054878625156:web:1941c3cceb6f216efe01d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);