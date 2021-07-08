import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnm6rZ65kHd1F7ZxqR1hxhFsPUplmfx2c",
    authDomain: "linkedintodiscord.firebaseapp.com",
    projectId: "linkedintodiscord",
    storageBucket: "linkedintodiscord.appspot.com",
    messagingSenderId: "1046844279693",
    appId: "1:1046844279693:web:6095010938cbcded718bc4"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider, db}
