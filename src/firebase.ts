import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPS1DQlfHE-z8WZVQIRNH9mEhniP065j0",
  authDomain: "cardapio-ess.firebaseapp.com",
  projectId: "cardapio-ess",
  storageBucket: "cardapio-ess.appspot.com",
  messagingSenderId: "955913956972",
  appId: "1:955913956972:web:facf164cb2717e839a7249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db as firestore};