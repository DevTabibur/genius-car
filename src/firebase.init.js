// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Q5eKN4ToBW0hYyAmtQ4ypZ4n-5bIr9Q",
  authDomain: "genius-car-service-996e0.firebaseapp.com",
  projectId: "genius-car-service-996e0",
  storageBucket: "genius-car-service-996e0.appspot.com",
  messagingSenderId: "447487558368",
  appId: "1:447487558368:web:e6c5dbc814805d10dc8685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
