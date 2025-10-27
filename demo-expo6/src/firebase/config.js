import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAzjkI0zf1XVdHCD_ESL_ZWWQ0KDZToKgg",
    authDomain: "clasesprogramacion3-64694.firebaseapp.com",
    projectId: "clasesprogramacion3-64694",
    storageBucket: "clasesprogramacion3-64694.firebasestorage.app",
    messagingSenderId: "202085662297",
    appId: "1:202085662297:web:02ddfb564d333795a2bb48"
};
app.initializeApp(firebaseConfig)

export const aut = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();