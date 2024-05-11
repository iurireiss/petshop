
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9MdBv2pX1g1KQJhotzUEaRB7DlkkP0pA",
    authDomain: "petshop-ab95e.firebaseapp.com",
    projectId: "petshop-ab95e",
    storageBucket: "petshop-ab95e.appspot.com",
    messagingSenderId: "879990165131",
    appId: "1:879990165131:web:6882aad30973b4ecdc4e8e"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};