// import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCS9_-KuH9FOVork8B_066QmAUFML-kBIU",
    authDomain: "whatsapp-3-4806d.firebaseapp.com",
    projectId: "whatsapp-3-4806d",
    storageBucket: "whatsapp-3-4806d.appspot.com",
    messagingSenderId: "1012985940030",
    appId: "1:1012985940030:web:cdfcabacfcaaac450ee96f"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();


  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };