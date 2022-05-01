// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2vjs1KS0NoFCeo9vR0ilA6dAah0GEwo0",
  authDomain: "teamvotingappproject-58.firebaseapp.com",
  databaseURL: "https://teamvotingappproject-58-default-rtdb.firebaseio.com",
  projectId: "teamvotingappproject-58",
  storageBucket: "teamvotingappproject-58.appspot.com",
  messagingSenderId: "56096915787",
  appId: "1:56096915787:web:62b50a07d86153b72068ce"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database();