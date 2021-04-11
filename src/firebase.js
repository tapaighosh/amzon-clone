import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVCJYa2ImthWa08yipOw9ILDy-w2d4L-c",
    authDomain: "clone-9f873.firebaseapp.com",
    projectId: "clone-9f873",
    storageBucket: "clone-9f873.appspot.com",
    messagingSenderId: "642039239430",
    appId: "1:642039239430:web:6a751e7313d15d96840487",
    measurementId: "G-W828CXHPJZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db=firebaseApp.firestore();
  const auth = firebase.auth()

  export {db,auth};