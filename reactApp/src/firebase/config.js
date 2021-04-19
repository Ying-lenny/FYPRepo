import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpyk19uWUEFp8IjoSOVsswAmf2WPB68fY",
    authDomain: "fyp-portfoligo-images.firebaseapp.com",
    projectId: "fyp-portfoligo-images",
    storageBucket: "fyp-portfoligo-images.appspot.com",
    messagingSenderId: "62554598083",
    appId: "1:62554598083:web:334f917e86754c3590d076"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };