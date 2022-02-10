import firebase from 'firebase'
import { firebaseConfig } from "./Firebase.config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export {auth, googleProvider }