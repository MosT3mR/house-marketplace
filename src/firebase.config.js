import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9dJui4sfKGDs1NE9x08zRUzL3Ewx5eXg",
  authDomain: "house-marketplace-app-7b2d9.firebaseapp.com",
  projectId: "house-marketplace-app-7b2d9",
  storageBucket: "house-marketplace-app-7b2d9.appspot.com",
  messagingSenderId: "623694008761",
  appId: "1:623694008761:web:3cf1ed9c6a2f2cd00ca668"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); ( if i leave it this way it will not initialize so i need to call it! )

initializeApp(firebaseConfig)
export const db = getFirestore()