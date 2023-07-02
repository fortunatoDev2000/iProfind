// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6KhIhp3NccTQaX2utvHaq-dfXbpb7_2U",
  authDomain: "iprofind.firebaseapp.com",
  projectId: "iprofind",
  storageBucket: "iprofind.appspot.com",
  messagingSenderId: "278252027782",
  appId: "1:278252027782:web:4284d9c993bf67818ab607",
  measurementId: "G-LHNGXD5M6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

