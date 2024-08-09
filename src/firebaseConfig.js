import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const API_KEY = process.env.REACT_APP_API_KEY;
const SENDER_ID = process.env.REACT_APP_SENDER_ID;
const APP_ID = process.env.REACT_APP_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'learnlingo-98e21.firebaseapp.com',
  databaseURL: 'https://learnlingo-98e21-default-rtdb.firebaseio.com',
  projectId: 'learnlingo-98e21',
  storageBucket: 'learnlingo-98e21.appspot.com',
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase();
// export const dbReferance = ref(database)
// export const db = getFirestore(app);
// export const storage = getStorage(app);
