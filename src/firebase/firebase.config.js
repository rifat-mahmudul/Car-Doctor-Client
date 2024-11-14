// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARisArtV7MTEpSgHz8IlJRFiip-VZW0o0",
    authDomain: "car-doctor-76709.firebaseapp.com",
    projectId: "car-doctor-76709",
    storageBucket: "car-doctor-76709.firebasestorage.app",
    messagingSenderId: "484952637862",
    appId: "1:484952637862:web:f048ee1a9f291f35f8cf67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);