import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBU5M2DFkaTLfHMGX6KTZvFC-_IdEkxH0g",
    authDomain: "hevia-chat-b4339.firebaseapp.com",
    databaseURL: "https://hevia-chat-b4339.firebaseio.com",
    projectId: "hevia-chat-b4339",
    storageBucket: "",
    messagingSenderId: "273160501350"
  };
  
  const heviaFirebase = firebase.initializeApp(config);

  const google = new firebase.auth.GoogleAuthProvider();

  export default heviaFirebase;

  export { google };