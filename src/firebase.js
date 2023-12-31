import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth"
import { getStorage} from "firebase/storage"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqJqJObcqnWrwNc3g03SvLxMD_O69EYO4",
  authDomain: "dencord-6db48.firebaseapp.com",
  projectId: "dencord-6db48",
  storageBucket: "dencord-6db48.appspot.com",
  messagingSenderId: "304892100830",
  appId: "1:304892100830:web:61b886b80819a677d7024f",
  measurementId: "G-QJ329WTCJW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore();
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => signInWithRedirect(auth, googleProvider)

const analytics = getAnalytics(app);