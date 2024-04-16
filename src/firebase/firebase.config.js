// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo74QUScL42g1baxyOpOqPNrsxfbHp2-Y",
  authDomain: "jomi-joma.firebaseapp.com",
  projectId: "jomi-joma",
  storageBucket: "jomi-joma.appspot.com",
  messagingSenderId: "1009057643148",
  appId: "1:1009057643148:web:08ba8d3f678f72683f59a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;