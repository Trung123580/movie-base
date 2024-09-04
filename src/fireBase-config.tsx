import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCTKZ6YXn0FVYZvaKXraMREHpuvYFZ3muk",
  authDomain: "movie-net-c352c.firebaseapp.com",
  projectId: "movie-net-c352c",
  storageBucket: "movie-net-c352c.appspot.com",
  messagingSenderId: "133449832526",
  appId: "1:133449832526:web:d4cdfc5ae4c0be1afb0b1f",
  measurementId: "G-YJHRRNPYC1"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// export const twitterProvider = new TwitterAuthProvider();
export const firebaseStorage = getStorage(app);
