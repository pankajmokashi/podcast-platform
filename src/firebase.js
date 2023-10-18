// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcqnWyrfMTegXXQu9SF7XEHA8EKgy9h-Y",
  authDomain: "podcast-platform-42ead.firebaseapp.com",
  projectId: "podcast-platform-42ead",
  storageBucket: "podcast-platform-42ead.appspot.com",
  messagingSenderId: "542352462471",
  appId: "1:542352462471:web:d4eb2d74fa9bfb28969e22",
  measurementId: "G-79WFHPX86K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };