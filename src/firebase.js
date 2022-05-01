// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIZWaqQk0Z58D9pAjjk-EXRMffVzK_0KU",
  authDomain: "connect-us-bf18c.firebaseapp.com",
  projectId: "connect-us-bf18c",
  storageBucket: "connect-us-bf18c.appspot.com",
  messagingSenderId: "494835491641",
  appId: "1:494835491641:web:772543b01fad40a12dfee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export { auth, storage, db };
export default app;