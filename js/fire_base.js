// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL55gOaE5Vm4Oit39eKyokn3UPExj4KDA",
  authDomain: "jsi31-19351.firebaseapp.com",
  databaseURL: "https://jsi31-19351-default-rtdb.firebaseio.com",
  projectId: "jsi31-19351",
  storageBucket: "jsi31-19351.firebasestorage.app",
  messagingSenderId: "522525831589",
  appId: "1:522525831589:web:9a878305707d5a13aaf84c",
  measurementId: "G-HB66MS1MVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);