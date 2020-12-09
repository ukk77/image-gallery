import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBguicRmamLUz8Cte92ZntKg3lDWk3k828",
    authDomain: "image-gallery-f8edd.firebaseapp.com",
    databaseURL: "https://image-gallery-f8edd.firebaseio.com",
    projectId: "image-gallery-f8edd",
    storageBucket: "image-gallery-f8edd.appspot.com",
    messagingSenderId: "1083301179022",
    appId: "1:1083301179022:web:bc589ed7995d596aa6e3df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projStorage = firebase.storage();
  const projFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projStorage, projFirestore, timeStamp};