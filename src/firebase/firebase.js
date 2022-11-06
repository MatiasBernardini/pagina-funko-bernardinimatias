import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyABkb5szrGgNKxV-XxwPRdUX2E9RF90fSw",
  authDomain: "funkoarg-pagina.firebaseapp.com",
  projectId: "funkoarg-pagina",
  storageBucket: "funkoarg-pagina.appspot.com",
  messagingSenderId: "1051407098895",
  appId: "1:1051407098895:web:82f057602ec40fe235ef7a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app); 