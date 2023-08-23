// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPBu4JSORar8ArTjVUTV_9iCW11JznBIs",
  authDomain: "dentalcare-1bc41.firebaseapp.com",
  projectId: "dentalcare-1bc41",
  storageBucket: "dentalcare-1bc41.appspot.com",
  messagingSenderId: "182706501605",
  appId: "1:182706501605:web:345de77477e27101dce10c",
  measurementId: "G-BMLR2J9C4W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);