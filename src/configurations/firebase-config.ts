// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrzuFwckgOd9nN0hsvlso5pHVjT_k_EZQ",
    authDomain: "shop-alexandr-sudakov.firebaseapp.com",
    projectId: "shop-alexandr-sudakov",
    storageBucket: "shop-alexandr-sudakov.firebasestorage.app",
    messagingSenderId: "401192433235",
    appId: "1:401192433235:web:0e862cb3f267359e14b8a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);