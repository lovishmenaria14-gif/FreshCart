// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "freshcart-2bb3d.firebaseapp.com",
  projectId: "freshcart-2bb3d",
  storageBucket: "freshcart-2bb3d.firebasestorage.app",
  messagingSenderId: "561312563221",
  appId: "1:561312563221:web:e63295445d7684964f0e1c",
  measurementId: "G-DHY6EK9PGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAxkQ7kj6-BocA_gzw9AU733ymo41mOlXk",
//   authDomain: "freshcart-2bb3d.firebaseapp.com",
//   projectId: "freshcart-2bb3d",
//   storageBucket: "freshcart-2bb3d.firebasestorage.app",
//   messagingSenderId: "561312563221",
//   appId: "1:561312563221:web:e63295445d7684964f0e1c",
//   measurementId: "G-DHY6EK9PGP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);