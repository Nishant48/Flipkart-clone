import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA77_JfV17B7VvOc-qGSgqkEx7Y1nF3UcU",
    authDomain: "flipkart-8866.firebaseapp.com",
    databaseURL: "https://flipkart-8866.firebaseio.com",
    projectId: "flipkart-8866",
    storageBucket: "flipkart-8866.appspot.com",
    messagingSenderId: "983167178126",
    appId: "1:983167178126:web:b30d4b657845320626c0df",
    measurementId: "G-PF6V73T5HP"

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  export default db;