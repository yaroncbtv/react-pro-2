import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDJO6fo8oHYSj1QACtTrC-P5VRYV8FXCKY",
    authDomain: "blog-app-4ffcc.firebaseapp.com",
    databaseURL: "https://blog-app-4ffcc.firebaseio.com",
    projectId: "blog-app-4ffcc",
    storageBucket: "blog-app-4ffcc.appspot.com",
    messagingSenderId: "398754000321",
    appId: "1:398754000321:web:56d33ae065cb66a44a1340",
    measurementId: "G-KLH8LJ5ZM7"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
 

  export default fire;