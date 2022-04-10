// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC44rbrvuI7ZlOsllP81x4jr8H2W98n-9I",
  authDomain: "smart-car-services-da49b.firebaseapp.com",
  projectId: "smart-car-services-da49b",
  storageBucket: "smart-car-services-da49b.appspot.com",
  messagingSenderId: "554891907599",
  appId: "1:554891907599:web:5ff7cfd0d8dd8878f4897a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
