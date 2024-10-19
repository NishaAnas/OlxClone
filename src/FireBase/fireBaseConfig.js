import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAuASonTco8f5r6bc3Cu3Xnc9y8dCKmMLY",
    authDomain: "olxclone-c99ac.firebaseapp.com",
    projectId: "olxclone-c99ac",
    storageBucket: "olxclone-c99ac.appspot.com",
    messagingSenderId: "130395794934",
    appId: "1:130395794934:web:31cf5e50fc8ad0d88aebd7",
    measurementId: "G-2NLQQK20F7"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Use getAuth for authentication
const firestore = getFirestore(app); // Firestore database instance
const storage = getStorage(app); // Firebase storage instance

export { app, auth, firestore, storage }; 