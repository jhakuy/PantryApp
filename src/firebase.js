import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1V_0r3l6FeJw_Fo45prjmWL0aAohx2A0",
  authDomain: "pantryapp-8b203.firebaseapp.com",
  projectId: "pantryapp-8b203",
  storageBucket: "pantryapp-8b203.appspot.com",
  messagingSenderId: "1079080713806",
  appId: "1:1079080713806:web:0c9cab11186eca2e930d1f",
  measurementId: "G-0SS85WHY4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
