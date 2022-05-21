import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCAjeZonER6T8xNa1YsKYgh_Zx-QIpMIAA",
    authDomain: "wcemate.firebaseapp.com",
    projectId: "wcemate",
    storageBucket: "wcemate.appspot.com",
    messagingSenderId: "427789412069",    
    appId: "1:427789412069:web:576387d0d5ffc29b6d960c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
